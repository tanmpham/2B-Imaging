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
          router.push('/')
        }
      } catch (error) {
        console.error('Create patient error', error)
        toast.error('Failed to create patient', toasterStyle)
      }
    }

    createPatient()
  };

  const handleCancel = () => {
    router.push('/')
  };

  return (
    <div className="bg-gray-900 min-h-screen flex w-[88vw] items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md">
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
            className="bg-gray-700 p-2 text-white rounded-md w-full"
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
            className="bg-gray-700 p-2 text-white rounded-md w-full"
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
            className="bg-gray-700 p-2 text-white rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={handleCancel} className="mr-2 bg-red-500 text-white p-2 rounded-md">Cancel</button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Save</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePatientPage;




