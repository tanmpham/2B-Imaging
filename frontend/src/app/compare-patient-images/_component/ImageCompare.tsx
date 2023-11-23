import Img from '@/components/shared/Img'
import React from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { GoShare } from 'react-icons/go'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { RxText } from 'react-icons/rx'
import { SlPencil } from 'react-icons/sl'
import { VscSettings } from 'react-icons/vsc'
import DrawCanvasCompare from './DrawCanvasCompare'

const style = {
  icon: `hover:scale-[1.1] hover:text-green_1 cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
}

interface Props {
  src: string
}

const ImageCompare = ({ src }: Props) => {
  const [isDrawing, setIsDrawing] = React.useState(false)

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing)
  }

  return (
    <div className={`flex h-fit items-center`}>
      <div className={`w-[484px] flex flex-col items-center justify-center`}>
        {/* Use DrawCanvas component when drawing is active */}
        {isDrawing ? (
          <DrawCanvasCompare imgSrc={src} />
        ) : (
          <Img src={src} className="!object-contain rounded-[10px]" />
        )}
      </div>

      <div className="grow flex flex-col items-center justify-between px-[.6rem] gap-y-[1.4rem]">
        <HiMagnifyingGlassPlus className={`${style.icon} text-[28px]`} />
        <HiMagnifyingGlassMinus className={`${style.icon} text-[28px]`} />
        <SlPencil
          className={`${style.icon} text-[24px] ${
            isDrawing && 'text-yellow-400'
          }`}
          onClick={toggleDrawing}
        />
        <RxText className={`${style.icon} text-[24px]`} />
        <VscSettings className={`${style.icon} text-[24px]`} />
        <GoShare className={`${style.icon} text-[24px]`} />
        <AiOutlineExpandAlt className={`${style.icon} text-[28px]`} />
      </div>
    </div>
  )
}
export default ImageCompare
