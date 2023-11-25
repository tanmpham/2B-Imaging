'use client'

interface Props {
  src: string
  width: string
}

function VideoCompare({ src, width }: Props) {
  return (
    <div className={`${width} p-[.2rem]`}>
      <video controls src={src} className="rounded-[10px]" />
    </div>
  )
}
export default VideoCompare
