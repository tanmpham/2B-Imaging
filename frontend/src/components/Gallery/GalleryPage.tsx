'use client'

import ImageView from '@/components/Gallery/ImageView'
import VideoView from '@/components/Gallery/VideoView'
import MediaList from '@/components/Media/MediaList'
import CompareBox from '@/components/shared/CompareBox'
import DeleteConfirmBox from '@/components/shared/DeleteConfirmBox'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
import { ImageDto } from '@/interfaces/image.dto'
import { PatientDto } from '@/interfaces/patient.dto'
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { DragEvent, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  images?: ImageDto[]
  imageID?: string
}
function GalleryPage({ images = [], imageID }: Props) {
  const {
    setCurrentPatient,
    previewMedia,
    setPreviewMedia,
    compareList,
    setCompareList,
  } = useGlobalContext()

  const searchParams = useSearchParams()
  const params = {
    patientId: searchParams.get('patient-id'),
    firstname: searchParams.get('firstname'),
    lastname: searchParams.get('lastname'),
    dob: searchParams.get('dob'),
  }

  //console.log(params)

  const [patientImages, setPatientImages] = useState<ImageDto[]>([])

  useEffect(() => {
    const getPatientData = async () => {
      if (params.patientId) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patients/${params.patientId}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
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
    }
    const getImagesByPatient = async () => {
      if (params.patientId) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patientimages?patient-id=${params.patientId}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
          }
          const imageData = (await res.json()) as ImageDto[]
          setPatientImages(imageData)
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }
    const getImagePreview = async () => {
      if (imageID) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patientimages/${imageID}`
          )
          if (!res.ok) {
            console.error('Failed to fetch data')
          }
          const imageData = (await res.json()) as ImageDto
          setPreviewMedia({
            src: `${process.env.NEXT_PUBLIC_CLIENT_API}/gallery/${imageData.ImageName}`,
            patientID: imageData.PatientID,
            imageID: imageData.ImageID,
            fileType: imageData.FileType,
            IsRightEye: imageData.IsRightEye,
          })
        } catch (error) {
          console.error('Failed to fetch patient:', error)
        }
      }
    }

    getImagesByPatient()
    getPatientData()
    getImagePreview()
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
    <div className="flex w-[88vw] text-white">
      <div className={`bg-grey_1 space-y-[30px] shrink-0`}>
        {patientImages.length > 0 && imageID && images.length === 0 ? (
          <MediaList
            className="max-h-[78vh] px-[60px] pt-[15px]"
            updateCompareList={updateCompareList}
            compareList={compareList}
            images={patientImages}
          />
        ) : (
          <MediaList
            className="max-h-[78vh] px-[60px] pt-[15px]"
            updateCompareList={updateCompareList}
            compareList={compareList}
            images={images}
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
      {previewMedia.fileType === 'jpg' && <ImageView />}
    </div>
  )
}
export default GalleryPage
