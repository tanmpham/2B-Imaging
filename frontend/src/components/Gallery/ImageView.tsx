'use client'

import { useGlobalContext } from '@/context/global-context'
import { TagDto } from '@/interfaces/tag.dto'
import { useEffect, useState } from 'react'
import ImageCanvas from './ImageCanvas'
import ImageNote from './ImageNote'

interface Props {}
function ImageView({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { IsRightEye, imageID } = previewMedia
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
    <div className="grow flex flex-col justify-evenly">
      <ImageCanvas />

      <div className="ml-[1rem] w-[1040px] relative flex justify-end">
        <ImageNote />
        <div>
          <div className="text-[20px]">
            {IsRightEye ? 'OD (Right Eye)' : 'OS (Left Eye)'}
          </div>
          <div className="text-end text-[60px] my-[-.4rem]">#</div>
          <div className="mr-[-1rem] pr-[1rem] text-end h-[110px] overflow-y-auto">
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
export default ImageView
