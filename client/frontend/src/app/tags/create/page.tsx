import { getAllImages } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { Metadata } from 'next'
import TagsCreate from './_component/TagsCreate'

export const metadata: Metadata = {
  title: 'Create tag | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0
interface Props {}
async function page({}: Props) {
  const images = (await getAllImages()) as ImageDto[]
  return <TagsCreate images={images} />
}
export default page
