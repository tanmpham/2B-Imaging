import GalleryPage from './_component/GalleryPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Images | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <GalleryPage />
}
export default page
