import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'

type Props = {
  src?: string
  video?: boolean
  tag?: boolean
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:scale-[1.04] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({ src, video, tag }: Props) {
  return (
    <div className={`relative w-[162px] h-[162px] ${!src && 'bg-grey'}`}>
      {video && (
        <BsCameraReels className={`${style.icon} text-black left-[1rem]`} />
      )}

      {tag && (
        <HiHashtag className={`${style.icon} text-orange right-[1rem]`} />
      )}
    </div>
  )
}
export default MediaItem
