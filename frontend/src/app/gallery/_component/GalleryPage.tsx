'use client'

import CompareBox from '@/components/CompareBox'
import DeleteConfirmBox from '@/components/DeleteConfirmBox'
import ImageCanvas from '@/components/ImageCanvas'
import MediaList from '@/components/Media/MediaList'
import VideoView from '@/components/VideoView'
import { LoaderPage } from '@/components/shared/LoaderPage'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import { useSearchParams } from 'next/navigation'
import { DragEvent, useEffect, useState } from 'react'
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

  const [isLoading, setIsLoading] = useState(true)

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
      setIsLoading(false)
    }
    getPatient()

    // console.log(currentPatient)
  }, [])

  const [mediaDrop, setMediaDrop] = useState({
    id: '',
    fileName: '',
  })
  const [isConfirming, setIsConfirming] = useState(false)

  function handleOnDrag(e: DragEvent, item: { id: string; fileName: string }) {
    e.dataTransfer.setData('mediaDrop', `${item.id},${item.fileName}`)
  }

  function handleOnDrop__delete(e: DragEvent) {
    const item = e.dataTransfer.getData('mediaDrop').split(',')
    setMediaDrop({ id: item[0], fileName: item[1] })
    setIsConfirming(true)
  }

  //console.log(mediaDrop)

  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div className="flex text-white">
          <div className={`bg-grey_1 space-y-[30px]`}>
            <MediaList
              className="max-h-[78vh] px-[60px] pt-[15px]"
              updateCompareList={updateCompareList}
              compareList={compareList}
              images={images}
              handleOnDrag={handleOnDrag}
            />
            <div className={`w-full flex items-center justify-evenly`}>
              <CompareBox
                compareList={compareList}
                updateCompareList={updateCompareList}
              />
              <DeleteConfirmBox
                fileName={mediaDrop.fileName}
                isConfirming={isConfirming}
                setIsConfirming={setIsConfirming}
                handleOnDrop__delete={handleOnDrop__delete}
              />
            </div>
          </div>

          {previewMedia.fileType === 'mp4' ? <VideoView /> : <ImageCanvas />}
        </div>
      )}
    </>
  )
}
export default GalleryPage
