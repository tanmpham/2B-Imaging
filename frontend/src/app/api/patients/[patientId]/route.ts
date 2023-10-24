import { getAPatient } from '@/functions'
import { PatientDto } from '@/interfaces/patient.dto'
import { NextResponse } from 'next/server'

export async function GET(
  req: Request,
  { params }: { params: { patientId: string } }
) {
  const data = (await getAPatient(params.patientId)) as PatientDto

  return NextResponse.json(data)
}
