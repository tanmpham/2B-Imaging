'use client'

import TagsImagesLink from '@/components/TagsImagesLink'
import { toasterStyle } from '@/constants/toasterStyle'
import { ImageDto } from '@/interfaces/image.dto'
import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import TagsCreateForm from './TagsCreateForm'

interface Props {
  images: ImageDto[]
}
function TagsCreate({ images }: Props) {
  const [tagName, setTagName] = useState('')
  const [imagesList, setImagesList] = useState([])

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
