import ImagesPage from './_component/ImagesPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Images | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <ImagesPage />
}
export default page
