import { getAllImages, getAllPatients } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import Home from './_components/Home'

async function page() {
  const images = (await getAllImages()) as ImageDto[]
  const patients = (await getAllPatients()) as PatientDto[]

  return <Home patients={patients} images={images} />
}
export default page
