'use client'

import MediaList from '@/components/Media/MediaList'
import CompareBox from '@/components/shared/CompareBox'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { ImageDto } from '@/interfaces/image.dto'
import { Dispatch, DragEvent, SetStateAction, useEffect, useState } from 'react'
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
  const { compareList, setCompareList } = useGlobalContext()
  const [currentImagesList, setCurrentImagesList] = useState<ImageDto[]>([])
  //console.log(currentImagesList)
  useEffect(() => {
    if (tagsShowing.length > 0) {
      if (currentTagID === -1) {
        setCurrentTagID(tagsShowing[0].tagID)
      } else {
        const getImages = async () => {
          try {
            const res = await fetch(`api/patientimages?tag-id=${currentTagID}`)
            if (!res.ok) {
              console.error('Failed to fetch data')
            }
            const images = (await res.json()) as ImageDto[]
            setCurrentImagesList(images)
          } catch (error) {
            console.error('Failed to fetch data')
          }
        }
        getImages()
      }
    } else {
      setCompareList([])
    }
  }, [currentTagID, setCurrentTagID, tagsShowing])

  const updateCompareList = (src: string, method: string) => {
    if (method === 'add') {
      setCompareList((prev) => [...prev, src])
    }

    if (method === 'delete') {
      setCompareList(compareList.filter((item) => item !== src))
    }
  }

  function handleOnDrop__compare(e: DragEvent) {
    const item = e.dataTransfer.getData('mediaDrop').split(',')
    const src = item[2]
    if (compareList.length && compareList.length > 5) {
      toast.error('Reached limit 6 images to compare.', toasterStyle)
    } else {
      if (!compareList.includes(src)) {
        updateCompareList(src, 'add')
      } else {
        toast.error('Item is already selected.', toasterStyle)
      }
    }
  }
  return (
    <div className={`grow h-screen bg-grey_3 overflow-x-auto`}>
      {tagsShowing.length === 0 ? (
        <div></div>
      ) : (
        <>
          <div
            className={`flex items-center text-[24px] mt-[.4rem] mx-[.4rem]`}
          >
            {tagsShowing.map(({ tagID, tag }, idx) => (
              <div
                key={tagID}
                className={`cursor-pointer px-[2rem] py-[1rem] border border-transparent rounded-[10px] hover:border-orange_1 active:scale-[.96] ${
                  (currentTagID === -1 && idx === 0) || currentTagID === tagID
                    ? style.title.active
                    : style.title.inactive
                } transition-all ease-linear`}
                onClick={() => {
                  setCurrentTagID(tagID)
                  setCompareList([])
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          {currentImagesList.length > 0 && (
            <div className="flex items-center gap-x-[4rem]">
              <MediaList
                className="max-h-[88vh] w-fit px-[2rem] mt-[1rem]"
                images={currentImagesList}
                updateCompareList={updateCompareList}
                compareList={compareList}
              />

              <CompareBox
                compareList={compareList}
                updateCompareList={updateCompareList}
                handleOnDrop__compare={handleOnDrop__compare}
              />
            </div>
          )}
        </>
      )}
    </div>
  )
}
export default TagsDisplay
