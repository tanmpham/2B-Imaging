'use client'

import { ImageDto } from '@/interfaces/image.dto'
import { format } from 'date-fns'
import { Dispatch, SetStateAction, useState } from 'react'
import MediaItem from './MediaItem'

interface Props {
  setPreviewData?: Dispatch<SetStateAction<{ src: string; id: string }>>
  previewData?: { src: string; id: string }
  className?: string
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  images: ImageDto[]
}

const style = {
  date: `col-span-2 text-center text-grey_2 font-[300]`,
}

const fileType = (filename: string) => {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}

function MediaList({
  compareList,
  previewData,
  setPreviewData,
  className,
  updateCompareList,
  images,
}: Props) {
  // console.log(fileType(images[0].ImageName))

  const x = format(new Date(images[0].DateCreated.split(' ')[0]), 'MM/dd/yyyy')
  const y = format(new Date(images[1].DateCreated.split(' ')[0]), 'MM/dd/yyyy')

  console.log(x === y)

  console.log(x)
  console.log(y)

  // const [imagesList, setImagesList] = useState<
  //   null[] | [{ date: string; imagesGroup: ImageDto[] }]
  // >([])

  images.map((image) => {})

  return (
    <div
      className={`${className} grid grid-cols-2 gap-x-[28px] gap-y-[28px] justify-start overflow-y-auto`}
    >
      <div className={style.date}>03/01/2023</div>
      <MediaItem
        id={'1'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        video
        tag
      />
      <MediaItem
        id={'2'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'3'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'4'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        video
        tag
      />
      <div className={style.date}>02/01/2023</div>
      <MediaItem
        id={'5'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'6'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        tag
      />
      <MediaItem
        id={'7'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        video
        tag
      />
      <MediaItem
        id={'8'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        video
        tag
      />
      <MediaItem
        id={'9'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'10'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        tag
      />
      <div className={style.date}>01/01/2023</div>
      <MediaItem
        id={'11'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'12'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
      />
      <MediaItem
        id={'13'}
        setPreviewData={setPreviewData}
        updateCompareList={updateCompareList}
        compareList={compareList}
        video
        tag
      />
    </div>
  )
}
export default MediaList
