'use client'

import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'

interface Props {}
function ImagesPage({}: Props) {
  const [previewSrc, setPreviewSrc] = useState('')
  return (
    <div className="flex text-white">
      <MediaList setPreviewSrc={setPreviewSrc} previewSrc={previewSrc} />
    </div>
  )
}
export default ImagesPage
