'use client'

import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'

interface Props {
  src?: string
  video?: boolean
  tag?: boolean
  setPreviewSrc: Dispatch<SetStateAction<string>>
  id: string
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:scale-[1.04] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({ id, src, video, tag, setPreviewSrc }: Props) {
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        setPreviewSrc('1')
        break
      case 2:
        if (video) {
          router.push(`/videos/${id}`)
        } else {
          router.push(`/images/${id}`)
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
      className={`relative w-[162px] h-[162px] ${!src && 'bg-grey'}`}
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
