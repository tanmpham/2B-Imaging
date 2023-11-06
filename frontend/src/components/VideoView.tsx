'use client'

import { useGlobalContext } from '@/context/global-context'

interface Props {}

function VideoView({}: Props) {
  const { previewMedia } = useGlobalContext()
  const { src, IsRightEye, imageID } = previewMedia
  return (
    <div className="grow">
      <div className={`mt-[1rem] w-full px-[1rem] h-fit shrink-0`}>
        <video controls src={src} className="!object-contain" />
      </div>
    </div>
  )
}
export default VideoView
