'use client'

import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'
import PatientSelection from './PatientSelection'
import Preview from './Preview'

function Home() {
  const [previewSrc, setPreviewSrc] = useState('1')

  return (
    <div className="w-[88vw] h-screen bg-black flex text-white">
      <PatientSelection />
      <MediaList setPreviewSrc={setPreviewSrc} previewSrc={previewSrc} />
      <Preview src={previewSrc} />
    </div>
  )
}
export default Home
