'use client'

import { PatientDto } from '@/app/interfaces/patient.dto'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type Props = { children: ReactNode }

type CurrentPatientContextType = {
  currentPatient: PatientDto
  setCurrentPatient: Dispatch<SetStateAction<PatientDto>>
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

  return (
    <CurrentPatientContext.Provider
      value={{
        currentPatient,
        setCurrentPatient,
      }}
    >
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
