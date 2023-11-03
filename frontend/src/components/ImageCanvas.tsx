'use client'

import { useGlobalContext } from '@/context/global-context'
import Img from './shared/Img/Img'

interface Props {}
function ImageCanvas({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye } = previewMedia
  return (
    <div className="grow flex items-center justify-center">
      <div className={`w-[96%]`}>
        <Img src={src} />
      </div>
    </div>
  )
}
export default ImageCanvas
