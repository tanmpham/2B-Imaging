'use client'

import { compareList } from '@/interfaces/compare-list'
import { fileType } from '@/utils'
import { useRouter } from 'next/navigation'
import { DragEvent, MouseEvent } from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs'
import Img from './Img'

const style = {
  image: `w-[50px] h-[50px] flex items-center justify-center group text-[18px] text-black dark:text-white hover:translate-y-[-.1rem] transition-transform ease-linear`,
}

interface Props {
  compareList: compareList[]
  updateCompareList: (id: string, src: string, method: string) => void
  handleOnDrop__compare: (e: DragEvent) => void
}
function CompareBox({
  compareList,
  updateCompareList,
  handleOnDrop__compare,
}: Props) {
  const router = useRouter()

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    switch (e.detail) {
      case 1:
        break
      case 2: {
        let imagesQuery = '?'

        compareList.forEach(function (value, index, array) {
          if (index === 0) {
            imagesQuery += `image=${value.id}`
          } else {
            const addStr = `&image${index + 1}=${value.id}`
            imagesQuery += addStr
          }
        })

        router.push(`/compare-patient-images${imagesQuery}`)
      }
    }
  }

  return (
    <div
      onDrop={handleOnDrop__compare}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onClick={handleClick}
      className="z-[20] w-[240px] h-[160px] rounded-[10px] bg-blue_2 hover:bg-blue-300 flex flex-col items-center transition-colors ease-linear"
    >
      <div className={`text-white dark:text-black text-[13px] font-semibold`}>
        Compare
      </div>
      <div
        className={`grid grid-cols-3 gap-y-[1rem] gap-x-[1.4rem] justify-center pt-[.4rem]`}
      >
        {compareList.map(({ id, src }) => (
          <button
            id={src}
            key={id}
            onClick={() => {
              updateCompareList(id, src, 'delete')
            }}
            className={`${style.image} bg-transparent hover:bg-white dark:hover:bg-black`}
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
