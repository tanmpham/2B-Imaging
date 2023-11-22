'use client'

import { useSearchParams } from 'next/navigation'
import React from 'react'
import ImageCompare from './ImageCompare'

interface Props {}

function ComparePage({}: Props) {
  const searchParams = useSearchParams()
  const params = Array.from({ length: 6 }, (_, i) =>
    i === 0 ? searchParams.get(`image`) : searchParams.get(`image${i + 1}`)
  )
  //console.log(params)

  return (
    <div className="max-w-[88vw] h-fit flex flex-wrap gap-x-[1rem] justify-center items-center gap-y-[4.6rem] m-auto"></div>
  )
}

export default ComparePage
