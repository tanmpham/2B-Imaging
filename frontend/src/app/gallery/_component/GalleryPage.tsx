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
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { DragEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  images: ImageDto[]
}
function GalleryPage({ images }: Props) {
  const { setCurrentPatient, previewMedia, compareList, setCompareList } =
    useGlobalContext()

  const searchParams = useSearchParams()
  const params = {
    patientId: searchParams.get('patient-id'),
    firstname: searchParams.get('firstname'),
    lastname: searchParams.get('lastname'),
    dob: searchParams.get('dob'),
  }

  //console.log(params)

  const [isLoading, setIsLoading] = useState(true)

  const [patientImages, setPatientImages] = useState<ImageDto[]>([])

  useEffect(() => {
    const getPatientData = async () => {
      if (params.patientId) {
        try {
          const res = await fetch(`api/patients/${params.patientId}`)
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          }
          const patientData = (await res.json()) as PatientDto
          setCurrentPatient({
            PatientID: patientData.PatientID,
            LastName: patientData.LastName,
            FirstName: patientData.FirstName,
            DateofBirth: format(
              new Date(patientData.DateofBirth),
              'yyyy-MM-dd'
            ),
          })
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
      setIsLoading(false)
    }
    const getImagesByPatient = async () => {
      if (params.patientId) {
        try {
          const res = await fetch(
            `api/patientimages?patient-id=${params.patientId}`
          )
          if (!res.ok) {
            toast.error('Failed to fetch data', toasterStyle)
          }
          const imageData = (await res.json()) as ImageDto[]
          setPatientImages(imageData)
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
      setIsLoading(false)
    }
    getImagesByPatient()
    getPatientData()

    // console.log(currentPatient)
  }, [])

  const [mediaDrop, setMediaDrop] = useState({
    id: '',
    fileName: '',
  })

  function clearMediaDrop() {
    setMediaDrop({ id: '', fileName: '' })
  }

  const [isConfirming, setIsConfirming] = useState(false)

  function handleOnDrag(
    e: DragEvent,
    item: { id: string; fileName: string; src: string }
  ) {
    e.dataTransfer.setData(
      'mediaDrop',
      `${item.id},${item.fileName},${item.src}`
    )
  }

  function handleOnDrop__delete(e: DragEvent) {
    const item = e.dataTransfer.getData('mediaDrop').split(',')
    setMediaDrop({ id: item[0], fileName: item[1] })
    setIsConfirming(true)
  }

  const updateCompareList = (src: string, method: string) => {
    if (method === 'add') {
      setCompareList((prev) => [...prev, src])
    }

    if (method === 'delete') {
      setCompareList(compareList.filter((item) => item !== src))
    }
  }

  function handleOnDrop__compare(e: DragEvent) {
    const item = e.dataTransfer.getData('mediaDrop').split(',')
    const src = item[2]
    if (compareList.length && compareList.length > 5) {
      toast.error('Reached limit 6 images to compare.', toasterStyle)
    } else {
      if (!compareList.includes(src)) {
        updateCompareList(src, 'add')
      } else {
        toast.error('Item is already selected.', toasterStyle)
      }
    }
  }

  // console.log(mediaDrop)

  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <div className="flex w-[88vw] text-white">
          <div className={`bg-grey_1 space-y-[30px] shrink-0`}>
            {patientImages.length > 0 ? (
              <MediaList
                className="max-h-[78vh] px-[60px] pt-[15px]"
                updateCompareList={updateCompareList}
                compareList={compareList}
                images={patientImages}
                handleOnDrag={handleOnDrag}
              />
            ) : (
              <MediaList
                className="max-h-[78vh] px-[60px] pt-[15px]"
                updateCompareList={updateCompareList}
                compareList={compareList}
                images={images}
                handleOnDrag={handleOnDrag}
              />
            )}

            <div className={`w-full flex items-center justify-evenly`}>
              <CompareBox
                compareList={compareList}
                updateCompareList={updateCompareList}
                handleOnDrop__compare={handleOnDrop__compare}
              />
              <DeleteConfirmBox
                fileName={mediaDrop.fileName}
                isConfirming={isConfirming}
                setIsConfirming={setIsConfirming}
                handleOnDrop__delete={handleOnDrop__delete}
                clearMediaDrop={clearMediaDrop}
              />
            </div>
          </div>

          {previewMedia.fileType === 'mp4' && <VideoView />}
          {previewMedia.fileType === 'jpg' && <ImageCanvas />}
        </div>
      )}
    </>
  )
}
export default GalleryPage
