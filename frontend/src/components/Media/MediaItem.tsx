'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, DragEvent, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'
import Img from '../shared/Img/Img'

interface Props {
  src?: string
  tag?: boolean
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  fileType: string
  IsRightEye: number
  patientID: number
  id: number
  handleOnDrag?: (e: DragEvent, item: { id: string; fileName: string }) => void
  imageName: string
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:translate-x-[.2rem] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({
  id,
  src,
  tag,
  updateCompareList,
  compareList,
  fileType,
  IsRightEye,
  patientID,
  handleOnDrag,
  imageName,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isMediaPage = pathname.split('/')[1] === 'gallery'

  const { setPreviewMedia } = useGlobalContext()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (src) {
      setPreviewMedia({
        id: patientID,
        src: src,
        fileType: fileType,
        IsRightEye: IsRightEye,
      })
    }
    switch (e.detail) {
      case 2:
        if (isMediaPage && updateCompareList) {
          if (compareList?.length && compareList.length > 5) {
            toast.error('Reached limit 6 images to compare.', toasterStyle)
          } else {
            if (src && !compareList?.includes(src)) {
              updateCompareList(src, 'add')
            } else {
              toast.error('Item is already selected.', toasterStyle)
            }
          }
        } else {
          router.push(`/gallery?patient-id=${patientID}`)
        }
        break
    }
  }

  return (
    <button
      onClick={handleClick}
      draggable
      onDragStart={(e) => {
        handleOnDrag && handleOnDrag(e, { id: String(id), fileName: imageName })
      }}
      className={`relative z-[20] w-[200px] h-[200px] ${
        !src && 'bg-grey_2'
      } hover:translate-y-[-.2rem] border-2 border-transparent hover:border-white rounded-[6px] transition-all ease-linear group`}
    >
      {src && (
        <>
          {fileType === 'jpg' && (
            <Img
              className={`${
                tag && 'group-hover:opacity-[.4]'
              } transition-opacity ease-linear rounded-[6px]`}
              src={src}
            />
          )}
          {fileType === 'mp4' && (
            <video className="object-cover group-hover:opacity-[.4] transition-opacity ease-linear">
              <source src={`${src}#t=0.6`} type="video/mp4" />
            </video>
          )}
        </>
      )}

      {fileType === 'mp4' && (
        <BsCameraReels
          className={`${style.icon} text-stone-300 hover:text-stone-400 left-[1rem]`}
        />
      )}

      {tag && (
        <HiHashtag
          className={`${style.icon} text-orange_1 hover:text-orange-500 right-[1rem]`}
        />
      )}
    </button>
  )
}
export default MediaItem
