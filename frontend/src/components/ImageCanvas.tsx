'use client'

import { useGlobalContext } from '@/context/global-context'
import { TagDto } from '@/interfaces/tag.dto'
import { useEffect, useState } from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { GoShare } from 'react-icons/go'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { SlPencil } from 'react-icons/sl'
import { VscSettings } from 'react-icons/vsc'
import Img from './shared/Img/Img'

const style = {
  icon: `hover:scale-[1.1] hover:text-green_1 cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
}

interface Props {}
function ImageCanvas({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye, imageID } = previewMedia
  const [imgTags, setImgTags] = useState<TagDto[]>([])
  useEffect(() => {
    async function getTags() {
      if (imageID !== 0) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/tags?image-id=${imageID}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
          } else {
            const tagsData = (await res.json()) as TagDto[]
            setImgTags(tagsData)
          }
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }
    getTags()
  }, [imageID])
  return (
    <div className="grow">
      <div className={`flex h-fit`}>
        <div className={`ml-[1rem] mt-[1rem] w-[1040px]`}>
          <Img src={src} className="!object-contain" />
        </div>

        <div className="grow flex flex-col items-center justify-between mt-[2rem] mb-[1rem]">
          <div className={`flex flex-col items-center gap-y-[1.4rem]`}>
            <HiMagnifyingGlassPlus className={`${style.icon} text-[40px]`} />
            <HiMagnifyingGlassMinus className={`${style.icon} text-[40px]`} />
            <SlPencil className={`${style.icon} text-[34px]`} />
            <VscSettings className={`${style.icon} text-[34px]`} />
            <GoShare className={`${style.icon} text-[34px]`} />
          </div>
          <AiOutlineExpandAlt className={`${style.icon} text-[40px]`} />
        </div>
      </div>

      <div className="ml-[1rem] mt-[1rem] w-[1040px] flex justify-between">
        <div>hi</div>
        <div>
          <div className="text-[20px]">
            {IsRightEye ? 'OD (Right Eye)' : 'OS (Left Eye)'}
          </div>
          <div className="text-end text-[60px] my-[-.4rem]">#</div>
          <div className="mr-[-1rem] pr-[1rem] text-end h-[150px] overflow-y-auto">
            {imgTags.map(({ TagID, Tag }) => (
              <div
                key={TagID}
                className="hover:text-orange_1 transition-colors ease-in"
              >
                #{Tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageCanvas
