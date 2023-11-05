'use client'

import TagsImagesLink from '@/components/TagsImagesLink'
import { toasterStyle } from '@/constants/toasterStyle'
import { ImageDto } from '@/interfaces/image.dto'
import { DragEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import TagsCreateForm from './TagsCreateForm'

interface Props {
  images: ImageDto[]
}
function TagsCreate({ images }: Props) {
  const [tagName, setTagName] = useState('')
  const [imagesList, setImagesList] = useState<ImageDto[]>([])
  const [imagesID, setImagesID] = useState<string[]>([])

  function handle_image_add_to_tag(e: DragEvent) {
    const item = e.dataTransfer.getData('mediaDrop').split(',')
    const imageID = item[0]
    setImagesID((prev) => [...prev, imageID])
    async function fetchImageID() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patientimages/${imageID}`
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          const imageData = (await res.json()) as ImageDto
          setImagesList((prev) => [...prev, imageData])
        }
      } catch (error) {
        console.error('[fetchImageID]', error)
        toast.error('Server error. Cannot fetch the image.', toasterStyle)
      }
    }

    fetchImageID()
  }

  function handleSubmitTagCreation(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    async function createTag() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/tags`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Tag: tagName }),
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`#${tagName} added!`)
          window.location.href = `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/tags`
        }
      } catch (error) {
        console.error('Create tag error:', error)
        toast.error('Failed to create tag.', toasterStyle)
      }
    }

    createTag()
  }

  return (
    <div className="text-white flex w-[88vw]">
      <div className={`w-[580px] flex justify-center shrink-0`}>
        <TagsCreateForm
          tagName={tagName}
          setTagName={setTagName}
          handleSubmitTagCreation={handleSubmitTagCreation}
        />
      </div>

      <TagsImagesLink images={images} tagName={tagName} />
    </div>
  )
}
export default TagsCreate
