import { PatientDto } from './patient.dto'

export interface FilesUpload {
  Files: File[]
  Patient: PatientDto
}
