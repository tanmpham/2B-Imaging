'use client'

import React from 'react'

const style = {
  type: {
    active: `text-[24px] w-[140px] flex justify-center py-[1rem] border border-white`,
    inactive: `text-[24px] w-[140px] flex justify-center py-[1rem] text-stone-600 hover:text-stone-400 border border-transparent hover:border-stone-400 cursor-pointer active:scale-95 transition-all ease-linear`,
  },
}

type Props = {}

function AddMediaPage({}: Props) {
  const [isImage, setIsImage] = React.useState(true)
  return (
    <div className="text-black dark:text-white m-auto bg-grey_2 dark:bg-grey_3 rounded-[10px] w-[84vw] h-[94vh]">
      <h1 className="text-[34px] my-[1rem] mx-[2rem]">Upload</h1>
      <div className="h-[1px] w-full bg-black dark:bg-white" />
      <div className={`flex`}>
        <div
          className={isImage ? style.type.active : style.type.inactive}
          onClick={() => setIsImage(true)}
        >
          Image
        </div>
        <div
          className={!isImage ? style.type.active : style.type.inactive}
          onClick={() => setIsImage(false)}
        >
          Video
        </div>
      </div>
    </div>
  )
}

export default AddMediaPage
