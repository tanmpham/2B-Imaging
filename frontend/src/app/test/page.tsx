'use client'

import { LoaderPage } from '@/components/shared/LoaderPage'
import { useEffect, useState } from 'react'

function Page() {
  const [isLoad, setIsload] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsload(true)
    }, 1000)
  }, [])
  if (!isLoad) {
    return <LoaderPage />
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center text-4xl font-bold">
      Test page
      <img
        src="http://localhost:4000/gallery/image.png"
        width={500}
        height={500}
      />
    </div>
  )
}
export default Page
