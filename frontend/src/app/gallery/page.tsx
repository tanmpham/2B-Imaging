import GalleryPage from '@/components/Gallery/GalleryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

interface Props {}

function page({}: Props) {
  // const images = (await getAllImages()) as ImageDto[]
  return <GalleryPage />
}
export default page
