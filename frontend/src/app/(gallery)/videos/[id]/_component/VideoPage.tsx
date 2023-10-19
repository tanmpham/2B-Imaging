'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'

interface Props {}
function VideoPage({}: Props) {
  const [previewData, setPreviewData] = useState({
    src: '',
    id: '',
  })
  return (
    <div className="flex text-white">
      <div className={`bg-grey_1 space-y-[30px]`}>
        <MediaList
          className="max-h-[78vh] px-[80px] pt-[15px]"
          setPreviewData={setPreviewData}
          previewData={previewData}
        />
        <div
          className={`w-full flex items-center justify-between pl-[39px] pr-[55px]`}
        >
          <CompareBox />
          <DeleteConfirmBox />
        </div>
      </div>
    </div>
  )
}
export default VideoPage
