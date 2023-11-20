import { createPatient } from '@/functions'
import { PatientCreateDto } from '@/interfaces/patient.dto'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = (await req.json()) as PatientCreateDto;

  // Validate that FirstName, LastName, and DateOfBirth are not empty
  if (data.FirstName !== '' && data.LastName !== '' && data.DateOfBirth !== '') {
    const serverRes = (await createPatient(data)) as PatientCreateDto;
    return NextResponse.json({
      message: 'Patient created',
      status: 201,
      patientCreated: serverRes,
    });
  }

  return new NextResponse('Missing required fields', { status: 400 });
}
