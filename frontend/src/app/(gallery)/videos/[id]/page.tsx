import VideoPage from './_component/VideoPage'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Video View | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <VideoPage />
}
export default page
