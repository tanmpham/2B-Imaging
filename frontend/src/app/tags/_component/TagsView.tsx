'use client'

import { Button } from '@/components/shared/Buttons/Button'
import SlideSwitchBtn from '@/components/shared/Buttons/SlideSwitchBtn'
import { TagDto } from '@/interfaces/tag.dto'
import { closeOnClickOutside } from '@/utils'
import { useRouter } from 'next/navigation'
import { Dispatch, MouseEvent, SetStateAction, useRef, useState } from 'react'

interface Props {
  tags: TagDto[]
  setTagsShowing: Dispatch<SetStateAction<{ tagID: number; tag: string }[]>>
  currentTagID: number
  setCurrentTagID: Dispatch<SetStateAction<number>>
}

const style = {
  tag: {
    default: `w-full flex justify-between items-center group active:scale-[0.98] transition-transform ease-in px-[.8rem] py-[.4rem] rounded-[10px]`,
    active: `bg-stone-600`,
  },
}

function TagsView({
  tags,
  setTagsShowing,
  currentTagID,
  setCurrentTagID,
}: Props) {
  const router = useRouter()
  const ref = useRef(null)
  const [currentSelectedTag, setCurrentSelectedTag] = useState<number>(-1)

  function handleSelect(e: MouseEvent<HTMLDivElement>) {
    setCurrentSelectedTag(Number(e.currentTarget.id))
    closeOnClickOutside(ref, () => {
      setCurrentSelectedTag(-1)
    })
  }

  return (
    <div className="h-[88%] w-[500px] bg-grey_2 dark:bg-grey_3 rounded-[16px]">
      <div
        ref={ref}
        className={`max-h-[88%] overflow-y-auto pt-[4rem] px-[2.4rem]`}
      >
        {tags.map(({ TagID, Tag, UseCount }) => (
          <div
            id={String(TagID)}
            key={TagID}
            onClick={handleSelect}
            className={`${style.tag.default} ${
              currentSelectedTag === TagID && style.tag.active
            }`}
          >
            <div className="text-[26px] font-light group-hover:text-orange_1 group-hover:translate-x-[.2rem] hover:text-orange_1 transition-all ease-in">
              #{Tag}
            </div>
            <div className=" flex items-center gap-x-[.8rem]">
              <div className="text-grey_2_inverted dark:text-grey_4 font-light group-hover:translate-x-[.2rem] group-hover:text-orange_1 transition-all ease-in">
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
        className={`flex items-center gap-x-[.8rem] mt-[2rem] justify-end mr-[2rem]`}
      >
        <Button variant={'error'}>Delete</Button>
        <Button variant={'tag'}>Edit</Button>
        <Button
          onClick={() => {
            router.push('/tags/create')
          }}
        >
          Add
        </Button>
      </div>
    </div>
  )
}
export default TagsView
