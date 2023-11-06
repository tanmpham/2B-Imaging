'use client'

import { fileType } from '@/utils'
import { DragEvent, MouseEvent } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import Img from './shared/Img/Img'

const style = {
  image: `w-[50px] h-[50px] flex items-center justify-center group text-[18px] text-white hover:translate-y-[-.1rem] transition-transform ease-linear`,
}

interface Props {
  compareList: string[]
  updateCompareList: (src: string, method: string) => void
  handleOnDrop__compare: (e: DragEvent) => void
}
function CompareBox({
  compareList,
  updateCompareList,
  handleOnDrop__compare,
}: Props) {
  const deleteList = (e: MouseEvent<HTMLButtonElement>) => {
    updateCompareList((e.target as HTMLButtonElement).id, 'delete')
  }

  return (
    <div
      onDrop={handleOnDrop__compare}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      className="z-[20] w-[240px] h-[160px] rounded-[10px] bg-blue_2 flex flex-col items-center"
    >
      <div className={`text-black text-[13px] font-semibold`}>Compare</div>
      <div
        className={`grid grid-cols-3 gap-y-[1rem] gap-x-[1.4rem] justify-center pt-[.4rem]`}
      >
        {compareList.map((src, idx) => (
          <button
            id={src}
            key={idx}
            onClick={deleteList}
            className={`${style.image} bg-transparent hover:bg-black`}
          >
            <BsFillTrash3Fill
              className={`hidden group-hover:block text-red-500 pointer-events-none`}
            />

            {fileType(src) !== 'mp4' ? (
              <Img src={src} className={`block group-hover:hidden`} />
            ) : (
              <video className={`block group-hover:hidden`}>
                <source src={`${src}#t=0.6`} />
              </video>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
export default CompareBox
