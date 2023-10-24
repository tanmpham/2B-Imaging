import TagsView from './TagsView'

interface Props {}
function TagsPage({}: Props) {
  return (
    <div className="text-white flex">
      <div className={`w-[580px] h-screen flex items-center justify-center`}>
        <TagsView />
      </div>
    </div>
  )
}
export default TagsPage
