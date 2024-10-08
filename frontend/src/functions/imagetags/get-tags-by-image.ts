export async function getTagsByImage(imageID: string) {
  const res = await fetch(
    `${process.env.CLIENT_API}/imagetags?image-id=${imageID}`
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
