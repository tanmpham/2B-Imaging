'use client'

import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'

interface Props {}
function ImagesPage({}: Props) {
  const [previewData, setPreviewData] = useState({
    src: '',
    id: '',
  })
  return (
    <div className="flex text-white">
      <MediaList setPreviewData={setPreviewData} previewData={previewData} />
    </div>
  )
}
export default ImagesPage
