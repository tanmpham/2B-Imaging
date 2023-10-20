'use client'

import MediaList from '@/components/Media/MediaList'
import { ImageDto } from '@/interfaces/image.dto'
import { useState } from 'react'
import PatientSelection from './PatientSelection'
import Preview from './Preview'

interface Props {
  images: ImageDto[]
}

function Home({ images }: Props) {
  const [previewData, setPreviewData] = useState({
    src: '',
    id: '',
  })

  return (
    <div className="w-[88vw] h-full flex text-white bg-black">
      <PatientSelection />
      <MediaList
        images={images}
        className="bg-grey_1 max-h-screen ml-[78px] pt-[90px] pb-[40px] pr-[20px]"
        setPreviewData={setPreviewData}
        previewData={previewData}
      />
      <Preview src={previewData.src} id={previewData.id} />
    </div>
  )
}
export default Home
