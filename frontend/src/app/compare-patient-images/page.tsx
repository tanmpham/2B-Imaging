import { Metadata } from 'next'
import ComparePage from './_component/ComparePage'

export const metadata: Metadata = {
  title: 'Compare Page | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

interface Props {}

function page({}: Props) {
  // const images = (await getAllImages()) as ImageDto[]
  return <ComparePage />
}
export default page
