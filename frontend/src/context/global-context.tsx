'use client'

import { PatientDto } from '@/interfaces/patient.dto'
import { PreviewMedia } from '@/interfaces/preview-media'
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

interface GlobalContextType {
  currentPatient: PatientDto
  setCurrentPatient: Dispatch<SetStateAction<PatientDto>>
  selectedDate: string
  setSelectedDate: Dispatch<SetStateAction<string>>
  previewMedia: PreviewMedia
  setPreviewMedia: Dispatch<SetStateAction<PreviewMedia>>
}

const GlobalContext = createContext<GlobalContextType | null>(null)

export default function GlobalContextProvider({ children }: Props) {
  const [currentPatient, setCurrentPatient] = useState<PatientDto>({
    PatientID: -1,
    LastName: '',
    FirstName: '',
    DateofBirth: '',
  })

  const [previewMedia, setPreviewMedia] = useState<PreviewMedia>({
    src: '',
    patientID: 0,
    imageID: 0,
    fileType: '',
    IsRightEye: -1,
  })

  const [selectedDate, setSelectedDate] = useState('')

  return (
    <GlobalContext.Provider
      value={{
        currentPatient,
        setCurrentPatient,
        selectedDate,
        setSelectedDate,
        previewMedia,
        setPreviewMedia,
      }}
    >
      <Toaster />
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)

  if (context === null) {
    throw new Error(
      'useGlobalContext must be used within an GlobalContextProvider'
    )
  }

  return context
}
