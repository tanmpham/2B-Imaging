import { ImageDto } from '@/interfaces/image.dto'
import Home from './_components/Home'

async function getAllImages() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API}/patientimages`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

async function page() {
  const images = (await getAllImages()) as ImageDto[]

  return <Home images={images} />
}
export default page
