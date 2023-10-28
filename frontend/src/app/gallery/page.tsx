import { ImageDto } from '@/interfaces/image.dto'
import GalleryPage from './_component/GalleryPage'

import { getAllImages } from '@/functions'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

interface Props {}
async function page({}: Props) {
  const images = (await getAllImages()) as ImageDto[]
  return <GalleryPage images={images} />
}
export default page
