import { Metadata } from 'next'
import React from 'react'
import AddMediaPage from './_components/add-media'

export const metadata: Metadata = {
  title: 'Add Media | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

type Props = {}

function AddMedia({}: Props) {
  return <AddMediaPage />
}

export default AddMedia
