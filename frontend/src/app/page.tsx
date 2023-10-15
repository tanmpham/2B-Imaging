import MediaList from '@/components/Media/MediaList'
import PatientSelection from './_components/PatientSelection'

function page() {
  return (
    <div className="w-[88vw] h-screen bg-black flex text-white">
      <PatientSelection />
      <MediaList />
    </div>
  )
}
export default page
