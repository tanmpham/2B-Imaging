'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import toast from 'react-hot-toast'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'

interface Props {
  src?: string
  video?: boolean
  tag?: boolean
  setPreviewData?: Dispatch<SetStateAction<{ src: string; id: string }>>
  id: string
  updateCompareList?: (src: string, method: string) => void
  compareList?: string[]
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:scale-[1.04] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({
  id,
  src,
  video,
  tag,
  setPreviewData,
  updateCompareList,
  compareList,
}: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isMediaPage =
    pathname.split('/')[1] === 'images' || pathname.split('/')[1] === 'videos'

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        if (setPreviewData) {
          setPreviewData({ id: id, src: 'hi' })
        }

        break
      case 2:
        if (isMediaPage && updateCompareList) {
          if (compareList?.length && compareList.length > 5) {
            toast.error('Reached limit 6 images to compare.')
          } else {
            if (!compareList?.includes(id)) {
              updateCompareList(id, 'add')
            } else {
              toast.error('Item is already selected.')
            }
          }
        } else {
          if (video) {
            router.push(`/videos/${id}`)
          } else {
            router.push(`/images/${id}`)
          }
        }
        break
      case 3:
        console.log('triple click')
        break
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`relative w-[200px] h-[200px] ${!src && 'bg-grey_2'}`}
    >
      {video && (
        <BsCameraReels
          className={`${style.icon} text-stone-700 hover:text-black left-[1rem]`}
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
