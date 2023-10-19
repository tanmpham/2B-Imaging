import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import MediaItem from './MediaItem'

interface Props {
  setPreviewSrc: Dispatch<SetStateAction<string>>
  previewSrc: string
  className?: string
}

const style = {
  date: `col-span-2 text-center text-grey_2 font-[300]`,
}

function MediaList({ previewSrc, setPreviewSrc, className }: Props) {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-x-[28px] gap-y-[18px] justify-start overflow-y-auto`}
    >
      <div className={style.date}>03/01/2023</div>
      <MediaItem id={'1'} setPreviewSrc={setPreviewSrc} video tag />
      <MediaItem id={'2'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'3'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'4'} setPreviewSrc={setPreviewSrc} video tag />
      <div className={style.date}>02/01/2023</div>
      <MediaItem id={'5'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'6'} setPreviewSrc={setPreviewSrc} tag />
      <MediaItem id={'7'} setPreviewSrc={setPreviewSrc} video tag />
      <MediaItem id={'8'} setPreviewSrc={setPreviewSrc} video tag />
      <MediaItem id={'9'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'10'} setPreviewSrc={setPreviewSrc} tag />
      <div className={style.date}>01/01/2023</div>
      <MediaItem id={'11'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'12'} setPreviewSrc={setPreviewSrc} />
      <MediaItem id={'13'} setPreviewSrc={setPreviewSrc} video tag />
    </div>
  )
}
export default MediaList
