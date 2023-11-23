'use client'

import { toasterStyle } from '@/constants/toasterStyle'
import { ImageDto } from '@/interfaces/image.dto'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import toast from 'react-hot-toast'
import ImageCompare from './ImageCompare'

interface Props {}

function ComparePage({}: Props) {
  const [imagesList, setImagesList] = React.useState<ImageDto[]>([])
  const [params, setParams] = React.useState<(string | null)[]>([])

  const searchParams = useSearchParams()

  async function fetchImageID(id: string) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/patientimages/${id}`
      )
      if (!res.ok) {
        console.error('Failed to fetch data')
      } else {
        const imageData = (await res.json()) as ImageDto
        setImagesList((prev) => [...prev, imageData])
      }
    } catch (error) {
      console.error('[fetchImageID]', error)
      toast.error('Server error. Cannot fetch the image.', toasterStyle)
    }
  }

  React.useEffect(() => {
    setParams(
      Array.from({ length: 6 }, (_, i) =>
        i === 0 ? searchParams.get(`image`) : searchParams.get(`image${i + 1}`)
      )
    )
  }, [])

  React.useEffect(() => {
    params.map((item) => item && fetchImageID(item))
  }, [params])

  //console.log(imagesList)

  return (
    <div className="max-w-[88vw] h-fit flex flex-wrap gap-x-[1rem] justify-center items-center gap-y-[4.6rem] m-auto">
      {imagesList.map((image) => (
        <ImageCompare
          key={image.ImageID}
          src={`${process.env.NEXT_PUBLIC_IMAGES_HOST_SVC}/gallery/${image.ImageName}`}
        />
      ))}
    </div>
  )
}

export default ComparePage
