import { PatientCreateDto } from '@/interfaces/patient.dto';

export async function createPatient(patient: PatientCreateDto) {
  const res = await fetch(`${process.env.CLIENT_API}/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patient),
  });

  if (!res.ok) {
    throw new Error('Failed to create patient');
  }

  return res.json();
}
