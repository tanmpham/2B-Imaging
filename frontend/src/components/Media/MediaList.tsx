import { Dispatch, SetStateAction } from 'react'
import MediaItem from './MediaItem'

type Props = {
  setPreviewSrc: Dispatch<SetStateAction<string>>
  previewSrc: string
}

const style = {
  date: `col-span-2 text-center text-grey font-[300]`,
}

function MediaList({ previewSrc, setPreviewSrc }: Props) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.detail) {
      case 1:
        console.log('click')
        break
      case 2:
        console.log('double click')
        break
      case 3:
        console.log('triple click')
        break
    }
  }
  return (
    <div className="ml-[78px] grid grid-cols-2 gap-x-[28px] gap-y-[18px] justify-start max-h-screen overflow-y-auto pt-[90px] pb-[40px] pr-[20px]">
      <div className={style.date}>03/01/2023</div>
      <MediaItem handleClick={handleClick} video tag />
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} video tag />
      <div className={style.date}>02/01/2023</div>
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} tag />
      <MediaItem handleClick={handleClick} video tag />
      <MediaItem handleClick={handleClick} video tag />
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} tag />
      <div className={style.date}>01/01/2023</div>
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} />
      <MediaItem handleClick={handleClick} video tag />
    </div>
  )
}
export default MediaList
