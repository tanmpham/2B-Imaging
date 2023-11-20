import { Metadata } from 'next'
import React from 'react'
import CreatePatientPage from './_components/CreatePatientPage'

export const metadata: Metadata = {
  title: 'New Patient Entry | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

interface Props {}

function page({}: Props) {
  return <CreatePatientPage />
}

export default page
