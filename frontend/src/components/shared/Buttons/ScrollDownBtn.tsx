import React from 'react'
import { HiArrowDown } from 'react-icons/hi'

type Props = {}

function ScrollDownBtn({}: Props) {
  return (
    <div
      className={`h-[40px] w-[24px] rounded-[100px] bg-primary_light text-primary flex items-center justify-center border border-transparent hover:border-primary group-hover:border-primary cursor-pointer active:scale-95 transition-transform ease-in`}>
      <HiArrowDown />
    </div>
  )
}

export default ScrollDownBtn
