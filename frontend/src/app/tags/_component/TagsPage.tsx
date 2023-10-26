import { TagDto } from '@/interfaces/tag.dto'
import TagsView from './TagsView'

interface Props {
  tags: TagDto[]
}
function TagsPage({ tags }: Props) {
  return (
    <div className="text-white flex">
      <div className={`w-[580px] h-screen flex items-center justify-center`}>
        <TagsView tags={tags} />
      </div>
    </div>
  )
}
export default TagsPage
