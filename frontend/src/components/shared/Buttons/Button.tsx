import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority' //create css variants
import * as React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const buttonVariants = cva(
  `shrink-0 rounded-[0.2rem] border disabled:pointer-events-none disabled:text-stone-500 disabled:border-stone-500 disabled:bg-white disabled:border active:scale-95 transition-transform ease-in inline-flex items-center`, //these are the base styles
  {
    variants: {
      variant: {
        primary:
          'text-white border-white hover:border-green_2 hover:text-green_2',
        custom: '',
      },
      size: {
        default:
          'px-[.6rem] py-[.2rem] text-[13px] lg:text-base hover:scale-[1.02]',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
  error?: boolean
  errorMessage?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      isLoading,
      error = false,
      errorMessage = 'There was an error, please try again.',
      size,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <button
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}
        >
          {isLoading ? (
            <ImSpinner8 className="mr-2 h-4 w-4 animate-spin" />
          ) : null}
          {children}
        </button>

        {error && (
          <div className="text-red-700 text-[12px] m-1 w-full text-center">
            {errorMessage}
          </div>
        )}
      </>
    )
  }
)
Button.displayName = 'Button'

export { Button }
