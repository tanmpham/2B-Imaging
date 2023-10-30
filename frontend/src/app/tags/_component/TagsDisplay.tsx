'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { ImageDto } from '@/interfaces/image.dto'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  tagsShowing: { tagID: number; tag: string }[]
  currentTagID: number
  setCurrentTagID: Dispatch<SetStateAction<number>>
}
const style = {
  title: {
    active: `text-orange_1 font-semibold`,
    inactive: `text-grey_5 font-light hover:text-orange_1`,
  },
}
function TagsDisplay({ tagsShowing, currentTagID, setCurrentTagID }: Props) {
  const [currentImagesList, setCurrentImagesList] = useState<ImageDto[]>([])
  console.log(currentImagesList)
  useEffect(() => {
    if (tagsShowing.length > 0) {
      if (currentTagID === -1) {
        setCurrentTagID(tagsShowing[0].tagID)
      } else {
        const getImages = async () => {
          try {
            const res = await fetch(`api/patientimages?tag-id=${currentTagID}`)
            if (!res.ok) {
              toast.error('Failed to fetch data', toasterStyle)
            }
            const images = (await res.json()) as ImageDto[]
            setCurrentImagesList(images)
          } catch (error) {
            toast.error('Failed to fetch data', toasterStyle)
          }
        }
        getImages()
      }
    }
  }, [currentTagID, setCurrentTagID, tagsShowing])
  return (
    <div className={`grow h-screen bg-grey_3 overflow-x-auto`}>
      <div className={`flex items-center text-[24px] mt-[.4rem] mx-[.4rem]`}>
        {tagsShowing.map(({ tagID, tag }, idx) => (
          <div
            key={tagID}
            className={`cursor-pointer px-[2rem] py-[1rem] border border-transparent rounded-[6px] hover:border-orange_1 active:scale-[.96] ${
              (currentTagID === -1 && idx === 0) || currentTagID === tagID
                ? style.title.active
                : style.title.inactive
            } transition-all ease-linear`}
            onClick={() => {
              setCurrentTagID(tagID)
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
export default TagsDisplay
