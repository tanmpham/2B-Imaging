import { ImageDto } from '@/interfaces/image.dto'
import GalleryIdPage from './_component/GalleryIdPage'

import { getAllImages } from '@/functions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
async function page({}: Props) {
  const images = (await getAllImages()) as ImageDto[]
  return <GalleryIdPage images={images} />
}
export default page
