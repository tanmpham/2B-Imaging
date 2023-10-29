'use client'

import { TagDto } from '@/interfaces/tag.dto'
import { useState } from 'react'
import TagsDisplay from './TagsDisplay'
import TagsView from './TagsView'

interface Props {
  tags: TagDto[]
}
function TagsPage({ tags }: Props) {
  const [tagsShowing, setTagsShowing] = useState<number[]>([])

  //console.log(tagsShowing)

  return (
    <div className="text-white flex w-[88vw]">
      <div className={`w-[580px] h-screen flex items-center justify-center`}>
        <TagsView tags={tags} setTagsShowing={setTagsShowing} />
      </div>

      <TagsDisplay />
    </div>
  )
}
export default TagsPage
