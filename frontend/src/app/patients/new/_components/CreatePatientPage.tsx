'use client'
import { Button } from '@/components/shared/Buttons/Button'
import { toasterStyle } from '@/constants/toasterStyle'
import { PatientCreateDto } from '@/interfaces/patient.dto'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {}

function CreatePatientPage({}: Props) {
  // Define state variables for each input field
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dob, setDob] = useState('')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!firstName || !lastName || !dob) {
      setError('Please fill out all fields.')
      return
    }

    const lettersAndDashesRegex = /^[a-zA-Z-]+$/

    // Check if firstName and lastName contain only letters and dashes
    if (
      !lettersAndDashesRegex.test(firstName) ||
      !lettersAndDashesRegex.test(lastName)
    ) {
      setError(
        'First name and last name should contain only letters or dashes.'
      )
      return
    }

    // Handle form submission logic here
    const newPatient = {
      FirstName: firstName,
      LastName: lastName,
      DateofBirth: dob,
    } as PatientCreateDto

    setError(null)

    console.log('Form submitted:', { firstName, lastName, dob })

    async function createPatient() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patients/newpatient`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPatient),
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`${firstName} ${lastName} added!`, toasterStyle)
          window.location.href = '/'
        }
      } catch (error) {
        console.error('Create patient error', error)
        toast.error('Failed to create patient', toasterStyle)
      }
    }

    createPatient()
  }

  const handleCancel = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen flex w-[88vw] items-center justify-center">
      <form
        id="create_patient"
        onSubmit={(e) => e.preventDefault()}
        className="bg-grey_3 dark:bg-grey_3 text-black dark:text-white p-6 rounded-md"
      >
        {error && (
          <p className="text-red-500 mb-4 text-sm">
            <strong>Error:</strong> {error}
          </p>
        )}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-white dark:text-white"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-white dark:text-white"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="dob" className="block text-white dark:text-white">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="p-2 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end">
          <Button type="button" onClick={handleCancel} variant={'error'}>
            Cancel
          </Button>
          <div className="mx-2"></div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CreatePatientPage
