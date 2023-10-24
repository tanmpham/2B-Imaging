import VideosPage from './_component/VideosPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <VideosPage />
}
export default page
