import SlideSwitchBtn from '@/components/shared/Buttons/SlideSwitchBtn'
import { TagDto } from '@/interfaces/tag.dto'

interface Props {
  tags: TagDto[]
}
function TagsView({ tags }: Props) {
  return (
    <div className="relative h-[88%] w-[500px] bg-grey_3 rounded-[16px]">
      <div className={`relative pt-[4rem] px-[3rem]`}>
        {tags.map(({ TagID, Tag, UseCount }) => (
          <div
            key={TagID}
            className="w-full flex justify-between items-center group"
          >
            <div className="text-[26px] font-light group-hover:text-orange_1 group-hover:translate-x-[.2rem] hover:text-orange_1 transition-all ease-in">
              #{Tag}
            </div>
            <div className=" flex items-center gap-x-[.8rem]">
              <div className="text-grey_4 font-light group-hover:translate-x-[.2rem] group-hover:text-orange_1 transition-all ease-in">
                {UseCount}
              </div>
              <SlideSwitchBtn />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TagsView
