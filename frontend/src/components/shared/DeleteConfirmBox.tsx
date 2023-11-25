'use client'

import { closeOnClickOutside } from '@/utils'
import { closeOnPressEsc } from '@/utils/closeOnPressEsc'
import { Dispatch, DragEvent, SetStateAction, useRef, useState } from 'react'

interface Props {
  handleOnDrop__delete: (e: DragEvent) => void
  isConfirming: boolean
  setIsConfirming: Dispatch<SetStateAction<boolean>>
  fileName: string
  clearMediaDrop: () => void
}
function DeleteConfirmBox({
  handleOnDrop__delete,
  isConfirming,
  setIsConfirming,
  fileName,
  clearMediaDrop,
}: Props) {
  const [isDragOver, setIsDragOver] = useState(false)
  const ref = useRef(null)
  function inActiveClose() {
    closeOnClickOutside(ref, () => {
      setIsConfirming(false)
      clearMediaDrop()
    })
    closeOnPressEsc(ref, () => {
      setIsConfirming(false)
      clearMediaDrop()
    })
    setIsDragOver(false)
  }
  return (
    <div
      className={`relative w-[240px] h-[160px] flex items-center justify-center`}
    >
      <div
        ref={ref}
        onDrop={(e) => {
          handleOnDrop__delete(e)
          inActiveClose()
        }}
        onDragLeave={() => {
          inActiveClose()
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        className={`relative z-10 text-[20px] h-[100px] w-[240px] flex items-center justify-center text-center bg-red_1 border-t-[2px] border-b-[2px] border-dashed cursor-pointer hover:border-red-600 hover:text-white dark:hover:text-white transition-all ease-linear ${
          isDragOver
            ? 'text-black dark:text-white border-red-600'
            : 'border-red-900 text-grey_4'
        } ${isConfirming && 'text-white'}`}
      >
        {isConfirming ? (
          <div>
            <div>Confirm Delete?</div>
            <div className="text-[12px]">{fileName}</div>
          </div>
        ) : (
          'Drag here to delete'
        )}
      </div>

      <div
        onDrop={(e) => {
          handleOnDrop__delete(e)
          inActiveClose()
        }}
        onDragLeave={() => {
          inActiveClose()
        }}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragOver(true)
        }}
        className="absolute top-[-4rem] left-[-1.8rem] h-[230px] w-[300px]"
      />
    </div>
  )
}
export default DeleteConfirmBox
