'use client'

import { useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs'
import { MdWbSunny } from 'react-icons/md'

interface Props {}

const style = {
  container: {
    active: `bg-yellow-500 justify-end`,
    inactive: `bg-grey_4 justify-start`,
  },
}
function DarkSwitch({}: Props) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`relative w-[60px] h-[28px] rounded-l-[4px] rounded-r-[4px] flex items-center px-[.2rem] ${
        isActive ? style.container.active : style.container.inactive
      } active:translate-x-[-.2rem] transition-all ease-linear group`}
      onClick={() => {
        setIsActive((prev) => !prev)
      }}
    >
      <div
        className={`z-10 bg-white h-[22px] w-[22px] rounded-md ${
          !isActive && 'group-hover:bg-yellow-500'
        }`}
      />

      <BsFillMoonFill className={`absolute right-[.4rem] text-black`} />
      <MdWbSunny className={`absolute left-[.4rem] text-black`} />
    </div>
  )
}
export default DarkSwitch
