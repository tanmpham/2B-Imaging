'use client'

import Link from 'next/link'
import React from 'react'
import Img from '../Img/Img'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <>
      <Link
        href="/"
        className={`flex lg:hidden active:scale-95 transition-transform ease-in ${className}`}
      >
        <Img alt="2B Imaging Logo" src="" />
      </Link>

      <Link
        href="/"
        className={`hidden lg:flex active:scale-95 transition-transform ease-in ${className}`}
      >
        <Img alt="2B Imaging Logo" src="" />
      </Link>
    </>
  )
}

export default Logo
