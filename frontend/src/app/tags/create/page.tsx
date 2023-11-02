import { Metadata } from 'next'
import TagsCreate from './_component/TagsCreate'

export const metadata: Metadata = {
  title: 'Create tag | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0
interface Props {}
function page({}: Props) {
  return <TagsCreate />
}
export default page
