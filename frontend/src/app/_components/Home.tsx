'use client'

import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'
import PatientSelection from './PatientSelection'
import Preview from './Preview'

function Home() {
  const [previewSrc, setPreviewSrc] = useState('')

  return (
    <div className="w-[88vw] h-full flex text-white bg-black">
      <PatientSelection />
      <MediaList
        className="bg-grey_1 max-h-screen ml-[78px] pt-[90px] pb-[40px] pr-[20px]"
        setPreviewSrc={setPreviewSrc}
        previewSrc={previewSrc}
      />
      <Preview src={previewSrc} />
    </div>
  )
}
export default Home
