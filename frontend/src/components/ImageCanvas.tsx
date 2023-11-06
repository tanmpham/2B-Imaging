'use client'

import { useGlobalContext } from '@/context/global-context'
import Img from './shared/Img/Img'

interface Props {}
function ImageCanvas({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye } = previewMedia
  return (
    <div className="grow flex">
      <div className={`ml-[1rem] mt-[1rem] w-[1040px] h-fit`}>
        <Img src={src} className="!object-contain" />
      </div>
    </div>
  )
}
export default ImageCanvas
