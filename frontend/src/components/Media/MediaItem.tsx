'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'
import Img from '../shared/Img/Img'

interface Props {
  src?: string
  tag?: boolean
  setPreviewData?: Dispatch<
    SetStateAction<{
      src: string
      id: number
      fileType: string
      IsRightEye: number
    }>
  >
  id: number
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  fileType: string
  IsRightEye: number
  patientID: number
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:translate-x-[.2rem] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({
  id,
  src,
  tag,
  setPreviewData,
  updateCompareList,
  compareList,
  fileType,
  IsRightEye,
  patientID,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isMediaPage = pathname.split('/')[1] === 'gallery'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        if (setPreviewData && src) {
          setPreviewData({
            id: patientID,
            src: src,
            fileType: fileType,
            IsRightEye: IsRightEye,
          })
        }

        break
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
          router.push(`/gallery/${id}`)
        }
        break
      case 3:
        // console.log('triple click')
        break
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-[200px] h-[200px] ${
        !src && 'bg-grey_2'
      } hover:translate-y-[-.2rem] transition-transform ease-linear group`}
    >
      {src && (
        <>
          {fileType === 'jpg' && (
            <Img
              className={`${
                tag && 'group-hover:opacity-[.4]'
              } transition-opacity ease-linear`}
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
