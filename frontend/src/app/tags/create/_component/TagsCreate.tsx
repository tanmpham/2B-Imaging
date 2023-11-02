import TagsImagesLink from '@/components/TagsImagesLink'
import TagsCreateForm from './TagsCreateForm'

interface Props {}
function TagsCreate({}: Props) {
  return (
    <div className="text-white flex w-[88vw]">
      <div
        className={`w-[580px] h-screen flex items-center justify-center shrink-0`}
      >
        <TagsCreateForm />
      </div>

      <TagsImagesLink />
    </div>
  )
}
export default TagsCreate
