'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import MediaList from '@/components/Media/MediaList'
import { ImageDto } from '@/interfaces/image.dto'
import { useState } from 'react'

interface Props {
  images: ImageDto[]
}
function GalleryIdPage({ images }: Props) {
  const [compareList, setCompareList] = useState<string[] | never[]>([])

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
          compareList={compareList}
          images={images}
        />
        <div className={`w-full flex items-center justify-between px-[40px]`}>
          <CompareBox
            compareList={compareList}
            updateCompareList={updateCompareList}
          />
          <DeleteConfirmBox />
        </div>
      </div>
    </div>
  )
}
export default GalleryIdPage
