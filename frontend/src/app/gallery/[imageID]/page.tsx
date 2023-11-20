import GalleryPage from '@/components/Gallery/GalleryPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 400

interface Props {
  params: { imageID: string }
}
function page({ params: { imageID } }: Props) {
  return <GalleryPage imageID={imageID} />
}
export default page
