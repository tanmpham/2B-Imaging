'use client'

import { PatientDto } from '@/components/interfaces/patient.dto'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { Toaster } from 'react-hot-toast'

type Props = { children: ReactNode }

type CurrentPatientContextType = {
  currentPatient: PatientDto
  setCurrentPatient: Dispatch<SetStateAction<PatientDto>>
  selectedDate: string
  setSelectedDate: Dispatch<SetStateAction<string>>
}

const CurrentPatientContext = createContext<CurrentPatientContextType | null>(
  null
)

export default function CurrentPatientContextProvider({ children }: Props) {
  const [currentPatient, setCurrentPatient] = useState<PatientDto>({
    id: '',
    last: '',
    first: '',
    dob: '',
  })

  const [selectedDate, setSelectedDate] = useState('')

  return (
    <CurrentPatientContext.Provider
      value={{
        currentPatient,
        setCurrentPatient,
        selectedDate,
        setSelectedDate,
      }}
    >
      <Toaster />
      {children}
    </CurrentPatientContext.Provider>
  )
}

export function useCurrentPatientContext() {
  const context = useContext(CurrentPatientContext)

  if (context === null) {
    throw new Error(
      'useCurrentPatientContext must be used within an CurrentPatientContextProvider'
    )
  }

  return context
}
