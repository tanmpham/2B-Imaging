'use client'

import MediaList from '@/components/Media/MediaList'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import { useState } from 'react'
import PatientSelection from './PatientSelection'
import Preview from './Preview'

interface Props {
  images: ImageDto[]
  patients: PatientDto[]
}

function Home({ images, patients }: Props) {
  const [previewData, setPreviewData] = useState({
    src: '',
    id: 0,
    fileType: '',
  })

  return (
    <div className="w-[88vw] h-full flex text-white bg-black">
      <PatientSelection patients={patients} />
      <MediaList
        images={images}
        className="bg-grey_1 max-h-screen ml-[30px] pt-[90px] pb-[40px] pr-[20px]"
        setPreviewData={setPreviewData}
      />
      <Preview
        src={previewData.src}
        id={previewData.id}
        fileType={previewData.fileType}
      />
    </div>
  )
}
export default Home
