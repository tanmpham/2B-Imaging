import ImagePage from './_component/ImagePage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Image View | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <ImagePage />
}
export default page
