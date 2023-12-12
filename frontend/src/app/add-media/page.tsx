import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Add Media | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

type Props = {}

function AddMedia({}: Props) {
  return <div>AddMedia</div>
}

export default AddMedia
