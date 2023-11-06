'use client'

import { TagDto } from '@/interfaces/tag.dto'
import { useState } from 'react'
import TagsDisplay from './TagsDisplay'
import TagsView from './TagsView'

interface Props {
  tags: TagDto[]
}
function TagsPage({ tags }: Props) {
  const [tagsShowing, setTagsShowing] = useState<
    { tagID: number; tag: string }[]
  >([])

  //console.log(tagsShowing)

  const [currentTagID, setCurrentTagID] = useState(-1)

  return (
    <div className="text-black dark:text-white flex w-[88vw]">
      <div
        className={`w-[580px] h-screen flex items-center justify-center shrink-0`}
      >
        <TagsView
          tags={tags}
          setTagsShowing={setTagsShowing}
          currentTagID={currentTagID}
          setCurrentTagID={setCurrentTagID}
        />
      </div>

      <TagsDisplay
        tagsShowing={tagsShowing}
        currentTagID={currentTagID}
        setCurrentTagID={setCurrentTagID}
      />
    </div>
  )
}
export default TagsPage
