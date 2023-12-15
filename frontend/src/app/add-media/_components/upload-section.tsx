import { FileUpload } from '@/interfaces/files-upload'
import React from 'react'
import { FiFolderPlus } from 'react-icons/fi'

const style = {
  addBtn: {
    container: ``,
    icon: ``,
  },
}

type Props = {}

function UploadSection({}: Props) {
  const [filesUpload, setFilesUpload] = React.useState<FileUpload[]>([])
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.files)
    if (!e.target.files?.length) return
    for (const file of e.target.files) {
      // console.log(file)
      setFilesUpload((prev) => [
        ...prev,
        { name: file.name, src: URL.createObjectURL(file), type: file.type },
      ])
    }
  }
  console.log(filesUpload)
  return (
    <div className="flex items-center">
      <label className={`mt-[1rem] mx-[2rem]`}>
        <div className="h-[80px] w-[100px] rounded-[10px] border border-white border-dashed cursor-pointer flex flex-col gap-y-[.2rem] justify-center items-center text-center hover:border-stone-200 hover:text-stone-200 active:scale-95 transition-all ease-in">
          <FiFolderPlus className="text-[20px]" />
          Add Files
        </div>
        <input
          type="file"
          id="media_upload"
          name="media_upload"
          className={`w-0 h-0`}
          onChange={onChange}
          multiple
        />
      </label>
    </div>
  )
}

export default UploadSection
