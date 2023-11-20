// import React from 'react'

// interface Props {}

// // function CreatePatientPage({}: Props) {
// //   return <div className="text-white flex w-[88vw]">CreatePatientPage</div>
// // }

// function CreatePatientPage({}: Props) {
//   return (
//     <div className="bg-gray-900 min-h-screen flex w-[88vw] items-center justify-center">
//       <form className="bg-gray-800 p-6 rounded-md">
//         <div className="mb-4">
//           <label htmlFor="firstName" className="block text-white">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             className="bg-gray-700 p-2 text-white rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="lastName" className="block text-white">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             className="bg-gray-700 p-2 text-white rounded-md w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="dob" className="block text-white">Date of Birth:</label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             className="bg-gray-700 p-2 text-white rounded-md w-full"
//           />
//         </div>
//         <div className="flex justify-end">
//           <button type="button" className="mr-2 bg-red-500 text-white p-2 rounded-md">Cancel</button>
//           <button type="submit" className="bg-green-500 text-white p-2 rounded-md">Save</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreatePatientPage;



'use client'
import React, { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { PatientCreateDto } from '@/interfaces/patient.dto'

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

    router.push('/');

    console.log('Form submitted:', { firstName, lastName, dob });
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




