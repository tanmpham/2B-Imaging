import Img from '@/components/shared/Img'
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
    <div className="flex flex-col mx-[2rem]">
      <label className={`mt-[1rem]`}>
        <div className="h-[80px] w-[100px] rounded-[10px] border border-stone-300 text-stone-300 border-dashed cursor-pointer flex flex-col gap-y-[.2rem] justify-center items-center text-center hover:border-white hover:text-white active:scale-95 transition-all ease-in">
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
      <div className={`flex items-center overflow-x-auto gap-x-[1rem]`}>
        {filesUpload.length > 0 &&
          filesUpload.map(({ name, src, type }) => (
            <div key={name} className="w-[200px] h-fit">
              {type.split('/')[0] === 'image' && <Img src={src} />}
            </div>
          ))}
      </div>
    </div>
  )
}

export default UploadSection