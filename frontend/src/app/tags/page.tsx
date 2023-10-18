import TagsPage from './_component/TagsPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tags | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <TagsPage />
}
export default page
