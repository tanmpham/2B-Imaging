'use client'

import { MouseEvent } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'

const style = {
  image: `w-[50px] h-[50px] flex items-center justify-center group text-[18px] text-white hover:translate-y-[-.1rem] transition-transform ease-linear`,
}

interface Props {
  compareList: string[]
  updateCompareList: (src: string, method: string) => void
}
function CompareBox({ compareList, updateCompareList }: Props) {
  const deleteList = (e: MouseEvent<HTMLButtonElement>) => {
    updateCompareList((e.target as HTMLButtonElement).id, 'delete')
  }

  return (
    <div className="w-[240px] h-[160px] rounded-[6px] bg-blue_2 flex flex-col items-center">
      <div className={`text-black text-[13px] font-semibold`}>Compare</div>
      <div
        className={`grid grid-cols-3 gap-y-[1rem] gap-x-[1.4rem] justify-center pt-[.4rem]`}
      >
        {compareList.map((src, idx) => (
          <button
            id={src}
            key={idx}
            onClick={deleteList}
            className={`${style.image} bg-black`}
          >
            <BsFillTrash3Fill
              className={`hidden group-hover:block group-hover:text-red-500 pointer-events-none`}
            />
            <div className={`block group-hover:hidden`}>{src}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
export default CompareBox
