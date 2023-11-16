export async function getImagesByPatient(patientID: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_API}/patientimages?patient-id=${patientID}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
