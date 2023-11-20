export interface PatientDto {
  PatientID: number
  LastName: string
  FirstName: string
  DateofBirth: string
}

export interface PatientCreateDto {
  LastName: string
  FirstName: string
  DateofBirth: string
}