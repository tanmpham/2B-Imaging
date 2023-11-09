'use client'

import { LoaderPage } from '@/components/shared/LoaderPage'
import { useEffect, useState } from 'react'

function Page() {
  const [isLoad, setIsload] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsload(true)
    }, 40)
  }, [])
  if (!isLoad) {
    return <LoaderPage />
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center text-4xl font-bold">
      Test page
      <img
        src="http://127.0.0.1:4200/gallery/Bob_Doe_Right_2023_01_08.jpg"
        width={500}
        height={500}
      />
    </div>
  )
}
export default Page
