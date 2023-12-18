'use client'

import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { GoTriangleDown } from 'react-icons/go'
import { MdDriveFolderUpload } from 'react-icons/md'
import UploadSection from './upload-section'

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
    <div className="text-black dark:text-white m-auto bg-grey_2 dark:bg-grey_3 rounded-[10px] w-[84vw] h-[94vh] p-[2rem] flex flex-col gap-y-[1rem]">
      <h1 className="text-[34px] flex gap-x-[1rem] items-center">
        Upload <MdDriveFolderUpload className="text-[40px]" />
      </h1>
      {/* <div className="h-[1px] w-full bg-black dark:bg-white" />
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

      {isImage ? <UploadImageSection /> : <></>} */}

      <UploadSection />

      <div className="flex items-center gap-x-[2rem]">
        <div className={`text-[20px]`}>Add to Patient:</div>
        <div
          className={`px-[1rem] py-[.6rem] border dark:border-stone-300 border-stone-700 dark:hover:border-white hover:border-black rounded-[10px] flex items-center gap-x-[1rem] cursor-pointer dark:text-stone-300 text-stone-700 group active:translate-y-[.2rem] transition-all ease-in`}
        >
          hi
          <GoTriangleDown className="text-[20px] group-hover:border-black dark:group-hover:text-white" />
        </div>
      </div>
    </div>
  )
}

export default AddMediaPage
