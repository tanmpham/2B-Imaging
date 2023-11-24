'use client'
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { PatientCreateDto } from '@/interfaces/patient.dto'
import toast from 'react-hot-toast'
import { toasterStyle } from '@/constants/toasterStyle';

interface Props {}

function CreatePatientPage({}: Props) {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState<string | null>(null);

  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!firstName || !lastName || !dob) {
      setError('Please fill out all fields.');
      return;
    }

    // Handle form submission logic here
    const newPatient={
      FirstName: firstName,
      LastName: lastName,
      DateofBirth: dob,
    } as PatientCreateDto

    setError(null);

    // router.push('/');

    console.log('Form submitted:', { firstName, lastName, dob });

    async function createPatient() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patients/newpatient`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPatient),
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`${firstName} ${lastName} added!`, toasterStyle)
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Create patient error', error)
        toast.error('Failed to create patient', toasterStyle)
      }
    }

    createPatient()
  };

  const handleCancel = () => {
    window.location.href = '/';
  };

  return (
    <div className="bg-black min-h-screen flex w-[88vw] items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-green_2 p-6 rounded-md">
      {error && (
          <p className="text-red-500 mb-4 text-sm">
            <strong>Error:</strong> {error}
          </p>
        )}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-white">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 text-white rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-white">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 text-white rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-white">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="p-2 text-white rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={handleCancel} className="shrink-0 rounded-[10px] border disabled:pointer-events-none disabled:text-stone-500 disabled:border-stone-500 disabled:bg-white disabled:border transition-all ease-in inline-flex items-center text-white border-white hover:border-red-600 hover:text-red-600 px-[.6rem] py-[.2rem] text-[13px] lg:text-base hover:scale-105 active:translate-y-[.2rem] w-fit" form="">Cancel</button>
          <div className="mx-2"></div>
          <button type="submit" className="shrink-0 rounded-[10px] border disabled:pointer-events-none disabled:text-stone-500 disabled:border-stone-500 disabled:bg-white disabled:border transition-all ease-in inline-flex items-center text-white border-white hover:border-green-600 hover:text-green-600 px-[.6rem] py-[.2rem] text-[13px] lg:text-base hover:scale-105 active:translate-y-[.2rem] w-fit" form="">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePatientPage;




