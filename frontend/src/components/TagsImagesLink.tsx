import { ImageDto } from '@/interfaces/image.dto'
import MediaList from './Media/MediaList'

interface Props {
  images: ImageDto[]
  tagName: string
}
function TagsImagesLink({ images, tagName }: Props) {
  return (
    <div className={`grow h-screen bg-grey_3 overflow-x-auto relative`}>
      <div className={`w-full flex justify-center absolute`}>
        <div className="h-screen w-[1px] bg-grey_4" />
      </div>

      <div className={`relative flex w-full`}>
        <div className={`flex justify-center flex-[50%]`}>
          <h2 className="text-orange_1 text-[40px] font-semibold my-[2rem]">
            {tagName !== '' ? `#${tagName}` : 'Tag'} Images
          </h2>
        </div>
        <div className={`flex flex-col items-center flex-[50%]`}>
          <h2 className="text-orange_1 text-[40px] font-semibold my-[2rem]">
            All Images
          </h2>
          <MediaList images={images} className="max-h-[84vh] px-[2rem]" />
        </div>
      </div>
    </div>
  )
}
export default TagsImagesLink
