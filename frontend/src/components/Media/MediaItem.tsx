'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { compareList } from '@/interfaces/compare-list'
import { TagDto } from '@/interfaces/tag.dto'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, DragEvent, SetStateAction, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'
import Img from '../shared/Img'

interface Props {
  src?: string
  updateCompareList?: (id: string, src: string, method: string) => void
  compareList?: compareList[]
  fileType: string
  IsRightEye: number
  patientID: number
  id: number
  imageName: string
  handle_image_add_to_tag?: (imageID: string) => void
  setImagesID?: Dispatch<SetStateAction<string[]>>
  imagesID?: string[]
}

const style = {
  icon: `text-[24px] cursor-pointer active:scale-95 hover:translate-x-[.2rem] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({
  id,
  src,
  updateCompareList,
  compareList,
  fileType,
  IsRightEye,
  patientID,
  imageName,
  handle_image_add_to_tag,
  setImagesID,
  imagesID,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isGalleryPage = pathname.split('/')[1] === 'gallery'
  const isTagPage = pathname.split('/')[1] === 'tags'
  const is_tag_create_or_edit_page =
    pathname.split('/')[1] === 'tags' &&
    (pathname.split('/')[2] === 'create' || pathname.split('/')[2] === 'edit')

  function updateCompareListFn() {
    if (compareList?.length && compareList.length > 5) {
      toast.error('Reached limit 6 images to compare.', toasterStyle)
    } else {
      if (
        src &&
        compareList &&
        !compareList.some((item) => item.src === src) &&
        updateCompareList
      ) {
        updateCompareList(String(id), src, 'add')
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
        if (isTagPage && !is_tag_create_or_edit_page) {
          updateCompareListFn()
        }
        if (
          is_tag_create_or_edit_page &&
          id &&
          handle_image_add_to_tag &&
          setImagesID &&
          imagesID
        ) {
          if (!imagesID.includes(String(id))) {
            handle_image_add_to_tag(String(id))
            setImagesID((prev) => [...prev, String(id)])
          } else toast.error('Item is already selected.', toasterStyle)
        }

        // if (isGalleryPage) {
        //   router.push(
        //     `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/gallery/${id}?patient-id=${patientID}`
        //   )
        // }
        break
      case 2:
        if (isGalleryPage && updateCompareList) {
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
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagetags?image-id=${id}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
          } else {
            const tagsData = (await res.json()) as TagDto[]

            if (tagsData.length > 0) {
              setIsHaveTag(true)
            }
          }
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }
    getTags()
  }, [id])

  function handleOnDrag(
    e: DragEvent,
    item: { id: string; fileName: string; src: string }
  ) {
    e.dataTransfer.setData(
      'mediaDrop',
      `${item.id},${item.fileName},${item.src}`
    )
  }

  return (
    <button
      onClick={handleClick}
      draggable
      onDragStart={(e) => {
        handleOnDrag(e, {
          id: String(id),
          fileName: imageName,
          src: src ? src : '',
        })
      }}
      className={`relative z-[20] w-[200px] h-[200px] p-1 ${
        !src && 'bg-grey_2'
      } hover:translate-y-[-.5rem] active:scale-[0.98] border hover:border-2 border-stone-500 dark:border-stone-800 hover:border-stone-300 dark:hover:border-grey_2 rounded-[10px] transition-all duration-[240ms] ease-in group`}
    >
      {src && (
        <>
          {fileType === 'jpg' && (
            <Img
              className={`${
                isHaveTag && 'group-hover:opacity-[.4]'
              } transition-opacity ease-linear rounded-[10px]`}
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
          className={`${style.icon} text-stone-700 dark:text-stone-300 hover:text-stone-600 dark:hover:text-stone-400 left-[1rem]`}
        />
      )}

      {isHaveTag && (
        <HiHashtag
          className={`${style.icon} text-orange-600 hover:text-orange-700 dark:text-orange_1 dark:hover:text-orange-500 right-[1rem]`}
        />
      )}
    </button>
  )
}
export default MediaItem
