'use client'

import React from 'react'
import { MdDriveFolderUpload } from 'react-icons/md'
import UploadImageSection from './upload-image'

const style = {
  type: {
    active: `text-[24px] w-[140px] flex justify-center py-[1rem] border border-white active:scale-95 hover:opacity-90 transition-all ease-linear`,
    inactive: `text-[24px] w-[140px] flex justify-center py-[1rem] text-stone-600 hover:text-stone-400 border border-transparent hover:border-stone-400 cursor-pointer active:scale-95 transition-all ease-linear`,
  },
}

type Props = {}

function AddMediaPage({}: Props) {
  const [isImage, setIsImage] = React.useState(true)
  return (
    <div className="text-black dark:text-white m-auto bg-grey_2 dark:bg-grey_3 rounded-[10px] w-[84vw] h-[94vh]">
      <h1 className="text-[34px] my-[1rem] mx-[2rem] flex gap-x-[1rem] items-center">
        Upload <MdDriveFolderUpload className="text-[40px]" />
      </h1>
      <div className="h-[1px] w-full bg-black dark:bg-white" />
      <div className={`flex mb-[1rem]`}>
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

      <UploadImageSection />
    </div>
  )
}

export default AddMediaPage
