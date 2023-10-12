'use client'

import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { BsCheck } from 'react-icons/bs'

const RadioBtnVariants = cva(
  'relative rounded-full border-[2px] flex items-center justify-center border-gray_12 hover:border-primary focus:bg-primary focus:border-none',
  {
    variants: {
      size: {
        lg: 'h-[15px] w-[15px] lg:h-[26px] lg:w-[26px]',
        sm: 'h-[26px] w-[26px]',
        none: '',
      },
    },
    defaultVariants: {
      size: 'lg',
    },
  }
)

interface RadioBtnProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof RadioBtnVariants> {
  selected?: boolean
}

const RadioBtn = React.forwardRef<HTMLDivElement, RadioBtnProps>(
  ({ className, size, selected, ...props }, _ref) => {
    return (
      <button
        {...props}
        type='button'
        className={`${cn(
          RadioBtnVariants({
            size,
            className,
          })
        )} ${selected && 'bg-primary border-none'}`}
      >
        <BsCheck className='absolute text-white text-[20px] lg:text-[30px] pointer-events-none peer-disabled:hidden' />
      </button>
    )
  }
)

RadioBtn.displayName = 'RadioBtn'

export { RadioBtn }
