'use client'

import { ImageDto } from '@/interfaces/image.dto'
// import { format } from 'date-fns'
import { format } from 'date-fns'
import { Dispatch, DragEvent, Fragment, SetStateAction } from 'react'
import MediaItem from './MediaItem'

interface Props {
  setPreviewMedia?: Dispatch<
    SetStateAction<{
      src: string
      id: number
      fileType: string
      IsRightEye: number
    }>
  >
  previewMedia?: {
    src: string
    id: number
    fileType: string
    IsRightEye: number
  }
  className?: string
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  images: ImageDto[]
  handleOnDrag?: (
    e: DragEvent,
    item: { id: string; fileName: string; src: string }
  ) => void
}

const style = {
  date: `col-span-2 text-center text-grey_2 font-[300]`,
}

function MediaList({
  compareList,
  className,
  updateCompareList,
  images,
  handleOnDrag,
}: Props) {
  //console.log(format(new Date(images[1].DateCreated), 'MMM eo, yyyy'))
  //console.log(images[1].DateCreated.split(' ').slice(0, 4).join(' '))
  return (
    <div
      className={`${className} grid grid-cols-2 gap-x-[28px] gap-y-[23px] justify-start overflow-y-auto`}
    >
      {images.map(
        (
          { ImageID, DateCreated, ImageName, FileType, IsRightEye, PatientID },
          idx
        ) => (
          <Fragment key={ImageID}>
            {idx === 0 && (
              <div className={style.date}>
                {format(new Date(DateCreated), 'MMM do, yyyy')}
              </div>
            )}
            {idx > 0 &&
              DateCreated.split(' ').slice(0, 4).join(' ') !==
                images[idx - 1].DateCreated.split(' ')
                  .slice(0, 4)
                  .join(' ') && (
                <div className={style.date}>
                  {format(new Date(DateCreated), 'MMM do, yyyy')}
                </div>
              )}

            <MediaItem
              src={`${process.env.NEXT_PUBLIC_CLIENT_API}/gallery/${ImageName}`}
              updateCompareList={updateCompareList}
              compareList={compareList}
              fileType={FileType}
              IsRightEye={IsRightEye}
              patientID={PatientID}
              id={ImageID}
              handleOnDrag={handleOnDrag}
              imageName={ImageName}
            />
          </Fragment>
        )
      )}
    </div>
  )
}
export default MediaList
