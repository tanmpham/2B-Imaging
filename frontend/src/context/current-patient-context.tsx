'use client'

import { PatientDto } from '@/interfaces/patient.dto'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
  children: ReactNode
}

interface CurrentPatientContextType {
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
    PatientID: -1,
    LastName: '',
    FirstName: '',
    DateofBirth: '',
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
