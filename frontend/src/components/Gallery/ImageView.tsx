'use client'

import { useGlobalContext } from '@/context/global-context'
import { NoteDto } from '@/interfaces/note.dto'
import { TagDto } from '@/interfaces/tag.dto'
import { useEffect, useState } from 'react'
import ImageCanvas from './ImageCanvas'
import ImageNote from './ImageNote'

interface Props {}
function ImageView({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { IsRightEye, imageID } = previewMedia
  const [imgTags, setImgTags] = useState<TagDto[]>([])
  const [notes, setNotes] = useState<NoteDto[]>([])
  useEffect(() => {
    async function getTags() {
      if (imageID !== 0) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagetags?image-id=${imageID}`
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

    async function getNotes() {
      if (imageID !== 0) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagenotes?image-id=${imageID}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
          } else {
            const notesData = (await res.json()) as NoteDto[]
            setNotes(notesData)
          }
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }

    getTags()
    getNotes()
  }, [imageID])
  return (
    <div className="grow flex flex-col justify-evenly">
      <ImageCanvas />

      <div className="ml-[1rem] w-[1040px] relative flex justify-end">
        <ImageNote notes={notes} />
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
