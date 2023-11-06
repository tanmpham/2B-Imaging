'use client'

import { useGlobalContext } from '@/context/global-context'
import { GoShare } from 'react-icons/go'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { SlPencil } from 'react-icons/sl'
import { VscSettings } from 'react-icons/vsc'
import Img from './shared/Img/Img'

const style = {
  icon: `hover:scale-[1.1] hover:text-green_1 cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
}

interface Props {}
function ImageCanvas({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye } = previewMedia
  return (
    <div className="grow flex">
      <div className={`ml-[1rem] mt-[1rem] w-[1040px] h-fit`}>
        <Img src={src} className="!object-contain" />
      </div>

      <div className="grow flex flex-col items-center mt-[2rem] gap-y-[1.4rem]">
        <HiMagnifyingGlassPlus className={`${style.icon} text-[40px]`} />
        <HiMagnifyingGlassMinus className={`${style.icon} text-[40px]`} />
        <SlPencil className={`${style.icon} text-[34px]`} />
        <VscSettings className={`${style.icon} text-[34px]`} />
        <GoShare className={`${style.icon} text-[34px]`} />
      </div>
    </div>
  )
}
export default ImageCanvas
