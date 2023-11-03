'use client'

import { Button } from '@/components/shared/Buttons/Button'
import SlideSwitchBtn from '@/components/shared/Buttons/SlideSwitchBtn'
import { TagDto } from '@/interfaces/tag.dto'
import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  tags: TagDto[]
  setTagsShowing: Dispatch<SetStateAction<{ tagID: number; tag: string }[]>>
  currentTagID: number
  setCurrentTagID: Dispatch<SetStateAction<number>>
}
function TagsView({
  tags,
  setTagsShowing,
  currentTagID,
  setCurrentTagID,
}: Props) {
  const router = useRouter()
  return (
    <div className="h-[88%] w-[500px] bg-grey_3 rounded-[16px]">
      <div className={`max-h-[88%] overflow-y-auto pt-[4rem] px-[3rem]`}>
        {tags.map(({ TagID, Tag, UseCount }) => (
          <div
            key={TagID}
            className="w-full flex justify-between items-center group"
          >
            <div className="text-[26px] font-light group-hover:text-orange_1 group-hover:translate-x-[.2rem] hover:text-orange_1 transition-all ease-in">
              #{Tag}
            </div>
            <div className=" flex items-center gap-x-[.8rem]">
              <div className="text-grey_4 font-light group-hover:translate-x-[.2rem] group-hover:text-orange_1 transition-all ease-in">
                {UseCount}
              </div>
              <SlideSwitchBtn
                currentTagID={currentTagID}
                setCurrentTagID={setCurrentTagID}
                TagID={TagID}
                Tag={Tag}
                setTagsShowing={setTagsShowing}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className={`flex items-center gap-x-[1rem] mt-[2rem] justify-end mr-[2rem]`}
      >
        <Button
          variant={'error'}
          className="hover:translate-y-[-.2rem] transition-transform ease-in"
        >
          Delete
        </Button>
        <Button
          variant={'tag'}
          className="hover:translate-y-[-.2rem] transition-transform ease-in"
        >
          Modify
        </Button>
        <Button
          onClick={() => {
            router.push('/tags/create')
          }}
          className="hover:translate-y-[-.2rem] transition-transform ease-in"
        >
          Add
        </Button>
      </div>
    </div>
  )
}
export default TagsView
