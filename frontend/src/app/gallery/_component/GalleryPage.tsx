'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import ImageCanvas from '@/components/ImageCanvas'
import MediaList from '@/components/Media/MediaList'
import VideoView from '@/components/VideoView'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
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

  const { currentPatient, setCurrentPatient, previewMedia } = useGlobalContext()

  const searchParams = useSearchParams()
  const params = {
    patientId: searchParams.get('patient-id'),
    firstname: searchParams.get('firstname'),
    lastname: searchParams.get('lastname'),
    dob: searchParams.get('dob'),
  }

  //console.log(params)

  useEffect(() => {
    const getPatient = async () => {
      if (params.patientId) {
        try {
          const res = await fetch(`api/patients/${params.patientId}`)
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          }
          const patientData = (await res.json()) as PatientDto
          setCurrentPatient(patientData)
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }
    getPatient()

    // console.log(currentPatient)
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

      {previewMedia.fileType === 'mp4' ? <VideoView /> : <ImageCanvas />}
    </div>
  )
}
export default GalleryPage
