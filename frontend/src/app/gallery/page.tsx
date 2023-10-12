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
  return <div>Gallery</div>
}
export default Page
