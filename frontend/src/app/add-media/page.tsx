import { getAllPatients } from '@/functions'
import { PatientDto } from '@/interfaces/patient.dto'
import { Metadata } from 'next'
import React from 'react'
import AddMediaPage from './_components/add-media'

export const metadata: Metadata = {
  title: 'Add Media | 2B Imaging',
  description: 'Copyright © 2023 2B Imaging. All rights reserved.',
}

export const revalidate = 0

type Props = {}

async function AddMedia({}: Props) {
  const patients = (await getAllPatients()) as PatientDto[]
  return <AddMediaPage patients={patients} />
}

export default AddMedia
