export async function getNotes(imageID: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_API}/imagenotes?image-id=${imageID}`
  )
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
