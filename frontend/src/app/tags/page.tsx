import { getAllTags } from '@/functions'
import { TagDto } from '@/interfaces/tag.dto'
import { Metadata } from 'next'
import TagsPage from './_component/TagsPage'

export const metadata: Metadata = {
  title: 'Tags | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0
interface Props {}
async function page({}: Props) {
  const tags = (await getAllTags()) as TagDto[]
  return <TagsPage tags={tags} />
}
export default page
