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
  handle_image_add_to_tag?: (imageID: string) => void
  setImagesID?: Dispatch<SetStateAction<string[]>>
  imagesID?: string[]
}

const style = {
  date: `col-span-2 text-center text-grey_3 dark:text-grey_2 font-[300]`,
}

function MediaList({
  compareList,
  className,
  updateCompareList,
  images,
  handle_image_add_to_tag,
  setImagesID,
  imagesID,
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
              imageName={ImageName}
              handle_image_add_to_tag={handle_image_add_to_tag}
              setImagesID={setImagesID}
              imagesID={imagesID}
            />
          </Fragment>
        )
      )}
    </div>
  )
}
export default MediaList
