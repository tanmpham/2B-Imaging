'use client'

import { useGlobalContext } from '@/context/global-context'
import { HiMagnifyingGlassMinus, HiMagnifyingGlassPlus } from 'react-icons/hi2'
import { SlPencil } from 'react-icons/sl'

interface Props {}

const style = {
  icon: `text-[40px] hover:scale-[1.1] cursor-pointer active:translate-y-[.2rem] transition-all ease-linear`,
}

function VideoView({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye } = previewMedia
  return (
    <div className="grow">
      <div className={`flex`}>
        <div className={`ml-[1rem] mt-[1rem] w-[1040px] h-fit shrink-0`}>
          <video controls src={src} className="!object-contain" />
        </div>

        <div className="grow flex flex-col items-center mt-[2rem] gap-y-[1rem]">
          <HiMagnifyingGlassPlus className={style.icon} />
          <HiMagnifyingGlassMinus className={style.icon} />
          <div>123</div>
          <div>321</div>
          <div>5567</div>
        </div>
      </div>
    </div>
  )
}
export default VideoView
