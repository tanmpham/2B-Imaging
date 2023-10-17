import { BsCameraReels } from 'react-icons/bs'
import { HiHashtag } from 'react-icons/hi2'

type Props = {
  src?: string
  video?: boolean
  tag?: boolean
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const style = {
  icon: `text-[34px] cursor-pointer active:scale-95 hover:scale-[1.04] transition-transform ease-linear z-10 absolute bottom-[1rem]`,
}

function MediaItem({ src, video, tag, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className={`relative w-[162px] h-[162px] ${!src && 'bg-grey'}`}
    >
      {video && (
        <BsCameraReels
          className={`${style.icon} text-stone-700 hover:text-black left-[1rem]`}
        />
      )}

      {tag && (
        <HiHashtag
          className={`${style.icon} text-orange_1 hover:text-orange-500 right-[1rem]`}
        />
      )}
    </button>
  )
}
export default MediaItem
