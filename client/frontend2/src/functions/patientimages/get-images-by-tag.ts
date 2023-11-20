export async function getImagesByTag(tagID: string) {
  const res = await fetch(
    `${process.env.CLIENT_API}/patientimages?tag-id=${tagID}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
