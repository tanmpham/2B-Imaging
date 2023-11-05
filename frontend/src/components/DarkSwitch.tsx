'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdWbSunny } from 'react-icons/md'

interface Props {}

const style = {
  container: {
    active: `bg-yellow-400 hover:bg-yellow-300 justify-end`,
    inactive: `bg-grey_4 justify-start`,
  },
}
function DarkSwitch({}: Props) {
  const [isMounted, setIsMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`relative w-[60px] h-[28px] rounded-l-[4px] rounded-r-[4px] flex items-center px-[.2rem] ${
        resolvedTheme === 'light'
          ? style.container.active
          : style.container.inactive
      } active:translate-y-[.2rem] transition-all ease-linear group`}
      onClick={() => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
      }}
    >
      <div
        className={`relative z-10 bg-white h-[22px] w-[22px] rounded-md ${
          resolvedTheme === 'light' && 'group-hover:bg-yellow-400'
        }`}
      />

      <BsFillMoonFill className={`absolute right-[.4rem] text-black`} />
      <MdWbSunny className={`absolute left-[.4rem] text-black`} />
    </div>
  )
}
export default DarkSwitch
