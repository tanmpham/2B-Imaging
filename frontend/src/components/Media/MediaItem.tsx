'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { TagDto } from '@/interfaces/tag.dto'
import { usePathname, useRouter } from 'next/navigation'
import { DragEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'
import Img from '../shared/Img/Img'

interface Props {
  src?: string
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
  fileType: string
  IsRightEye: number
  patientID: number
  id: number
  handleOnDrag?: (
    e: DragEvent,
    item: { id: string; fileName: string; src: string }
  ) => void
  imageName: string
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:translate-x-[.2rem] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({
  id,
  src,
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
  const isTagPage = pathname.split('/')[1] === 'tags'

  function updateCompareListFn() {
    if (compareList?.length && compareList.length > 5) {
      toast.error('Reached limit 6 images to compare.', toasterStyle)
    } else {
      if (src && !compareList?.includes(src) && updateCompareList) {
        updateCompareList(src, 'add')
      } else {
        toast.error('Item is already selected.', toasterStyle)
      }
    }
  }

  const { setPreviewMedia } = useGlobalContext()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (src) {
      setPreviewMedia({
        patientID: patientID,
        imageID: id,
        src: src,
        fileType: fileType,
        IsRightEye: IsRightEye,
      })
    }
    switch (e.detail) {
      case 1:
        if (isTagPage) {
          updateCompareListFn()
        }
        break
      case 2:
        if (isMediaPage && updateCompareList) {
          updateCompareListFn()
        } else {
          router.push(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/gallery?patient-id=${patientID}`
          )
        }

        break
    }
  }

  const [isHaveTag, setIsHaveTag] = useState<boolean>(false)

  useEffect(() => {
    async function getTags() {
      if (id !== 0) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/tags?image-id=${id}`
          )
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          } else {
            const tagsData = (await res.json()) as TagDto[]

            if (tagsData.length > 0) {
              setIsHaveTag(true)
            }
          }
        } catch (error) {
          console.error('Failed to fetch patient:', error)
          toast.error('Failed to fetch data', toasterStyle)
        }
      }
    }
    getTags()
  }, [id])

  return (
    <button
      onClick={handleClick}
      draggable
      onDragStart={(e) => {
        handleOnDrag && src
          ? handleOnDrag(e, {
              id: String(id),
              fileName: imageName,
              src: src,
            })
          : ''
      }}
      className={`relative z-[20] w-[200px] h-[200px] p-1 ${
        !src && 'bg-grey_2'
      } hover:translate-y-[-.2rem] active:scale-[0.98] border-2 border-transparent hover:border-grey_2 rounded-[6px] transition-all ease-linear group`}
    >
      {src && (
        <>
          {fileType === 'jpg' && (
            <Img
              className={`${
                isHaveTag && 'group-hover:opacity-[.4]'
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

      {isHaveTag && (
        <HiHashtag
          className={`${style.icon} text-orange_1 hover:text-orange-500 right-[1rem]`}
        />
      )}
    </button>
  )
}
export default MediaItem
