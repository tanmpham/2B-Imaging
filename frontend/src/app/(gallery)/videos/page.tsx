import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Videos | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}
function page({}: Props) {
  return <div className="text-white">page</div>
}
export default page
