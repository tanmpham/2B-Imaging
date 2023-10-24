'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import MediaList from '@/components/Media/MediaList'
import { toasterStyle } from '@/constants/toasterStyle'
import { useCurrentPatientContext } from '@/context/current-patient-context'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  images: ImageDto[]
}
function GalleryPage({ images }: Props) {
  const [compareList, setCompareList] = useState<string[] | never[]>([])

  const updateCompareList = (src: string, method: string) => {
    if (method === 'add') {
      setCompareList((prev) => [...prev, src])
    }

    if (method === 'delete') {
      setCompareList(compareList.filter((item) => item !== src))
    }
  }

  const { currentPatient, setCurrentPatient } = useCurrentPatientContext()

  const searchParams = useSearchParams()
  const search = searchParams.get('patient-id')

  useEffect(() => {
    if (search) {
      const getPatient = async () => {
        try {
          const res = await fetch(`api/patients/${search}`)
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          }
          const patientData = (await res.json()) as PatientDto
          setCurrentPatient(patientData)
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
      getPatient()
      // console.log(currentPatient)
    }
  }, [])

  return (
    <div className="flex text-white">
      <div className={`bg-grey_1 space-y-[30px]`}>
        <MediaList
          className="max-h-[78vh] px-[80px] pt-[15px]"
          updateCompareList={updateCompareList}
          compareList={compareList}
          images={images}
        />
        <div className={`w-full flex items-center justify-between px-[40px]`}>
          <CompareBox
            compareList={compareList}
            updateCompareList={updateCompareList}
          />
          <DeleteConfirmBox />
        </div>
      </div>
    </div>
  )
}
export default GalleryPage
