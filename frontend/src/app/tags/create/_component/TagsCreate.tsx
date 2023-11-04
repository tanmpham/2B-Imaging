'use client'

import TagsImagesLink from '@/components/TagsImagesLink'
import { ImageDto } from '@/interfaces/image.dto'
import { useState } from 'react'
import TagsCreateForm from './TagsCreateForm'

interface Props {
  images: ImageDto[]
}
function TagsCreate({ images }: Props) {
  const [tagName, setTagName] = useState('')
  return (
    <div className="text-white flex w-[88vw]">
      <div className={`w-[580px] flex justify-center shrink-0`}>
        <TagsCreateForm tagName={tagName} setTagName={setTagName} />
      </div>

      <TagsImagesLink images={images} tagName={tagName} />
    </div>
  )
}
export default TagsCreate
