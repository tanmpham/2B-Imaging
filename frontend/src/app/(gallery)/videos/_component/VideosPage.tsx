'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import MediaList from '@/components/Media/MediaList'
import { useState } from 'react'

interface Props {}
function VideosPage({}: Props) {
  const [compareList, setCompareList] = useState([''])

  const updateCompareList = (src: string, method: string) => {
    if (method === 'add') {
      setCompareList((prev) => [...prev, src])
    }

    if (method === 'delete') {
      setCompareList(compareList.filter((item) => item !== src))
    }
  }

  return (
    <div className="flex text-white">
      <div className={`bg-grey_1 space-y-[30px]`}>
        <MediaList
          className="max-h-[78vh] px-[80px] pt-[15px]"
          updateCompareList={updateCompareList}
        />
        <div className={`w-full flex items-center justify-between px-[40px]`}>
          <CompareBox />
          <DeleteConfirmBox />
        </div>
      </div>
    </div>
  )
}
export default VideosPage
