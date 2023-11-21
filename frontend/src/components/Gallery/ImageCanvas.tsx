import { useGlobalContext } from '@/context/global-context'
import React from 'react'
import { AiOutlineExpandAlt } from 'react-icons/ai'
import { GoShare } from 'react-icons/go'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { RxText } from 'react-icons/rx'
import { SlPencil } from 'react-icons/sl'
import { VscSettings } from 'react-icons/vsc'
import Img from '../shared/Img'
import DrawCanvas from './DrawingCanvas'

const style = {
  icon: `hover:scale-[1.1] hover:text-green_1 cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
}

const ImageCanvas = () => {
  const { previewMedia } = useGlobalContext()
  const { src } = previewMedia

  const [isDrawing, setIsDrawing] = React.useState(false)

  const toggleDrawing = () => {
    setIsDrawing(!isDrawing)
  }

  return (
    <div className={`flex h-fit`}>
      <div className={`ml-[1rem] w-[1040px]`}>
        {/* Use DrawCanvas component when drawing is active */}
        {isDrawing ? (
          <DrawCanvas imgSrc={src} />
        ) : (
          <Img src={src} className="!object-contain rounded-[10px]" />
        )}
      </div>

      <div className="grow flex flex-col items-center justify-between mt-[1rem] mb-[.4rem]">
        <div className={`flex flex-col items-center gap-y-[1.4rem]`}>
          <HiMagnifyingGlassPlus className={`${style.icon} text-[40px]`} />
          <HiMagnifyingGlassMinus className={`${style.icon} text-[40px]`} />
          <SlPencil
            className={`${style.icon} text-[34px]`}
            onClick={toggleDrawing}
          />
          <RxText className={`${style.icon} text-[34px]`} />
          <VscSettings className={`${style.icon} text-[34px]`} />
          <GoShare className={`${style.icon} text-[34px]`} />
        </div>
        <AiOutlineExpandAlt className={`${style.icon} text-[40px]`} />
      </div>
    </div>
  )
}

export default ImageCanvas
