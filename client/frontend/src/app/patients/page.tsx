import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Patients | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}

function page({}: Props) {
  return <div>Patients Page</div>
}

export default page
