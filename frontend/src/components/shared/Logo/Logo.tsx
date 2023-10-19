'use client'

import Link from 'next/link'
import React from 'react'

interface Props {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <>
      <Link
        href="/"
        className={`flex lg:hidden active:scale-95 transition-transform ease-in ${className}`}
      >
        <div className={`w-[117px] h-[58px] bg-green_2`}></div>
      </Link>

      <Link
        href="/"
        className={`hidden lg:flex active:scale-95 transition-transform ease-in ${className}`}
      >
        <div
          className={`w-full h-[60px] bg-green_2 rounded-[var(--rounded-default)]`}
        ></div>
      </Link>
    </>
  )
}

export default Logo
