'use client'

import { Dispatch, SetStateAction, useState } from 'react'

interface Props {
  TagID?: number
  Tag?: string
  setTagsShowing: Dispatch<SetStateAction<{ tagID: number; tag: string }[]>>
}

const style = {
  container: {
    active: `bg-orange_1 justify-end`,
    inactive: `bg-grey_4 justify-start`,
  },
}
function SlideSwitchBtn({ setTagsShowing, TagID, Tag }: Props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`w-[60px] h-[28px] rounded-l-full rounded-r-full flex items-center px-[.2rem] ${
        isActive ? style.container.active : style.container.inactive
      } active:scale-[0.94] transition-all ease-linear group`}
      onClick={() => {
        if (TagID && Tag) {
          if (isActive) {
            setTagsShowing((prev) =>
              prev.filter((item) => item.tagID !== TagID)
            )
          } else {
            setTagsShowing((prev) => [...prev, { tagID: TagID, tag: Tag }])
          }
        }
        setIsActive((prev) => !prev)
      }}
    >
      <div
        className={`z-10 bg-white h-[22px] w-[22px] rounded-full ${
          !isActive && 'group-hover:bg-orange_1'
        }`}
      />
    </div>
  )
}
export default SlideSwitchBtn
