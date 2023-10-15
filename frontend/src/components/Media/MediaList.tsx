import MediaItem from './MediaItem'

type Props = {}

const style = {
  date: `col-span-2 text-center text-grey font-[300]`,
}

function MediaList({}: Props) {
  return (
    <div className="ml-[78px] grid grid-cols-2 gap-x-[28px] gap-y-[18px] justify-start max-h-screen overflow-y-auto pt-[90px] pb-[40px] pr-[20px]">
      <div className={style.date}>03/01/2023</div>
      <MediaItem video tag />
      <MediaItem />
      <MediaItem />
      <MediaItem video tag />
      <div className={style.date}>02/01/2023</div>
      <MediaItem />
      <MediaItem tag />
      <MediaItem video tag />
      <MediaItem video tag />
      <MediaItem />
      <MediaItem tag />
      <div className={style.date}>01/01/2023</div>
      <MediaItem />
      <MediaItem />
      <MediaItem video tag />
    </div>
  )
}
export default MediaList
