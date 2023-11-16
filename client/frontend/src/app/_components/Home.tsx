'use client'

import MediaList from '@/components/Media/MediaList'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import PatientSelection from './PatientSelection'
import Preview from './Preview'

interface Props {
  images: ImageDto[]
  patients: PatientDto[]
}

function Home({ images, patients }: Props) {
  return (
    <div className="w-[88vw] h-full flex text-black bg-white dark:text-white dark:bg-black">
      <PatientSelection patients={patients} />
      <MediaList
        images={images}
        className="bg-grey_1 max-h-screen ml-[30px] pt-[90px] pb-[40px] px-[20px]"
      />
      <Preview />
    </div>
  )
}
export default Home
