'use client'

import { useEffect, useState } from 'react'

interface Props {
  tagsShowing: { tagID: number; tag: string }[]
}
const style = {
  title: {
    active: `text-orange_1 font-semibold`,
    inactive: `text-grey_5 font-light hover:text-orange_1`,
  },
}
function TagsDisplay({ tagsShowing }: Props) {
  const [currentTagID, setCurrentTagID] = useState(-1)

  //console.log(currentTagID)

  return (
    <div className={`grow h-screen bg-grey_3`}>
      <div className={`flex items-center text-[24px]`}>
        {tagsShowing.map(({ tagID, tag }, idx) => (
          <div
            key={tagID}
            className={`cursor-pointer px-[4rem] py-[1.4rem] border border-transparent rounded-[6px] hover:border-orange_1 active:scale-[.96] ${
              (currentTagID === -1 && idx === 0) || currentTagID === tagID
                ? style.title.active
                : style.title.inactive
            } transition-all ease-linear`}
            onClick={() => {
              setCurrentTagID(tagID)
            }}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  )
}
export default TagsDisplay
