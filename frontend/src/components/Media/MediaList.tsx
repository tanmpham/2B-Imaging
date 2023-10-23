'use client'

import { ImageDto } from '@/interfaces/image.dto'
// import { format } from 'date-fns'
import { Dispatch, Fragment, SetStateAction } from 'react'
import MediaItem from './MediaItem'

interface Props {
  setPreviewData?: Dispatch<SetStateAction<{ src: string; id: number }>>
  className?: string
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  images: ImageDto[]
}

const style = {
  date: `col-span-2 text-center text-grey_2 font-[300]`,
}

function MediaList({
  compareList,
  setPreviewData,
  className,
  updateCompareList,
  images,
}: Props) {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-x-[28px] gap-y-[28px] justify-start overflow-y-auto`}
    >
      {images.map(({ ImageID, DateCreated, ImageName }, idx) => (
        <Fragment key={ImageID}>
          {idx === 0 && (
            <div className={style.date}>{DateCreated.split(' ')[0]}</div>
          )}
          {idx > 0 &&
            DateCreated.split(' ')[0] !==
              images[idx - 1].DateCreated.split(' ')[0] && (
              <div className={style.date}>{DateCreated.split(' ')[0]}</div>
            )}
          <MediaItem
            id={ImageID}
            src={`${process.env.NEXT_PUBLIC_CLIENT_API}/gallery/${ImageName}`}
            setPreviewData={setPreviewData}
            updateCompareList={updateCompareList}
            compareList={compareList}
            fileName={ImageName}
          />
        </Fragment>
      ))}
    </div>
  )
}
export default MediaList
