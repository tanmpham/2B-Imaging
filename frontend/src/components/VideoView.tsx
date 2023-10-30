'use client'

import { useGlobalContext } from '@/context/global-context'

interface Props {}
function VideoView({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { id, src, IsRightEye } = previewMedia
  return (
    <div className="grow flex items-center justify-center">
      <div className={`w-[96%]`}>
        <video controls src={src} className="!object-contain" />
      </div>
    </div>
  )
}
export default VideoView
