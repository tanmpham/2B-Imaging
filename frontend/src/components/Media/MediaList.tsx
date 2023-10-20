import { Dispatch, SetStateAction } from 'react'
import MediaItem from './MediaItem'

interface Props {
  setPreviewData: Dispatch<SetStateAction<{ src: string; id: string }>>
  previewData: { src: string; id: string }
  className?: string
}

const style = {
  date: `col-span-2 text-center text-grey_2 font-[300]`,
}

function MediaList({ previewData, setPreviewData, className }: Props) {
  return (
    <div
      className={`${className} grid grid-cols-2 gap-x-[28px] gap-y-[18px] justify-start overflow-y-auto`}
    >
      <div className={style.date}>03/01/2023</div>
      <MediaItem id={'1'} setPreviewData={setPreviewData} video tag />
      <MediaItem id={'2'} setPreviewData={setPreviewData} />
      <MediaItem id={'3'} setPreviewData={setPreviewData} />
      <MediaItem id={'4'} setPreviewData={setPreviewData} video tag />
      <div className={style.date}>02/01/2023</div>
      <MediaItem id={'5'} setPreviewData={setPreviewData} />
      <MediaItem id={'6'} setPreviewData={setPreviewData} tag />
      <MediaItem id={'7'} setPreviewData={setPreviewData} video tag />
      <MediaItem id={'8'} setPreviewData={setPreviewData} video tag />
      <MediaItem id={'9'} setPreviewData={setPreviewData} />
      <MediaItem id={'10'} setPreviewData={setPreviewData} tag />
      <div className={style.date}>01/01/2023</div>
      <MediaItem id={'11'} setPreviewData={setPreviewData} />
      <MediaItem id={'12'} setPreviewData={setPreviewData} />
      <MediaItem id={'13'} setPreviewData={setPreviewData} video tag />
    </div>
  )
}
export default MediaList
