'use client'

import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'
import PatientSelection from '../PatientSelection'
import Preview from '../Preview'

function Home() {
  const [srcPreview, setSrcPreview] = useState('')

  return (
    <div className="w-[88vw] h-screen bg-black flex text-white">
      <PatientSelection />
      <MediaList />
      <Preview src="1" />
    </div>
  )
}
export default Home
