import { cn } from '@/utils/styles'
import { cva, VariantProps } from 'class-variance-authority' //create css variants
import * as React from 'react'
import { ImSpinner8 } from 'react-icons/im'

const buttonVariants = cva(
  `shrink-0 rounded-[10px] border disabled:pointer-events-none disabled:text-stone-500 disabled:border-stone-500 disabled:bg-white disabled:border transition-all ease-in inline-flex items-center`, //these are the base styles
  {
    variants: {
      variant: {
        primary:
          'text-black border-black hover:border-green-700 hover:text-green-700 dark:text-white dark:border-white dark:hover:border-green_1 dark:hover:text-green_1',
        success: `text-black border-black dark:text-white dark:border-white hover:border-lime-400 hover:text-lime-400`,
        warning: `text-black border-black dark:text-white dark:border-white hover:border-amber-400 hover:text-amber-400`,
        archive: `text-black border-black dark:text-white dark:border-white hover:border-yellow-400 hover:text-yellow-400`,
        tag: `text-black border-black dark:text-white dark:border-white hover:border-orange_1 hover:text-orange_1`,
        error: `text-black border-black dark:text-white dark:border-white hover:border-red-600 hover:text-red-600`,
        black: `text-black border-black hover:border-green-700 hover:text-green-700`,
        custom: '',
      },
      size: {
        default: 'px-[.6rem] py-[.2rem] text-[13px] lg:text-base',
        custom: '',
      },
      animation: {
        default: 'hover:scale-105 active:translate-y-[.2rem]',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      animation: 'default',
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
      animation,
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
          className={cn(
            buttonVariants({ variant, size, animation, className })
          )}
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
