import { TagDto } from '@/interfaces/tag.dto'
import TagsDisplay from './TagsDisplay'
import TagsView from './TagsView'

interface Props {
  tags: TagDto[]
}
function TagsPage({ tags }: Props) {
  return (
    <div className="text-white flex w-[88vw]">
      <div className={`w-[580px] h-screen flex items-center justify-center`}>
        <TagsView tags={tags} />
      </div>

      <TagsDisplay />
    </div>
  )
}
export default TagsPage
