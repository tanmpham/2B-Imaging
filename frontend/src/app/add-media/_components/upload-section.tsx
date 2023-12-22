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

type Props = {
  fileName: string[]
  setFileName: React.Dispatch<React.SetStateAction<string[]>>
  fileType: string[]
  setFileType: React.Dispatch<React.SetStateAction<string[]>>
  fileSrc: string[]
  setFileSrc: React.Dispatch<React.SetStateAction<string[]>>
}

function UploadSection({
  fileName,
  setFileName,
  fileType,
  setFileType,
  fileSrc,
  setFileSrc,
}: Props) {
  function addLocalFile(e: React.ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.files)
    if (!e.target.files?.length) return
    for (const file of e.target.files) {
      // console.log(file)

      setFileName((prev) => [...prev, file.name])
      setFileType((prev) => [...prev, file.type])
      setFileSrc((prev) => [...prev, URL.createObjectURL(file)])
    }
  }

  console.log({
    name: fileName,
    type: fileType,
    src: fileSrc,
  })
  return (
    <div className="flex flex-col">
      <label className={``}>
        <div className="h-[80px] w-[100px] rounded-[10px] border dark:border-stone-300 border-stone-700 dark:text-stone-300 text-stone-700 border-dashed cursor-pointer flex flex-col gap-y-[.2rem] justify-center items-center text-center dark:hover:border-white hover:border-black dark:hover:text-white hover:text-black active:scale-95 transition-all ease-in">
          <FiFolderPlus className="text-[20px]" />
          Add Files
        </div>
        <input
          type="file"
          id="media_upload"
          name="media_upload"
          className={`w-0 h-0`}
          onChange={addLocalFile}
          multiple
        />
      </label>
      <div className={`flex items-center overflow-x-auto gap-x-[1rem]`}>
        {fileSrc.length > 0 &&
          fileSrc.map((src, index) => (
            <div key={src} className="flex flex-col gap-y-[1rem] items-center">
              <div className="w-[220px]">
                {fileType[index].split('/')[0] === 'image' && <Img src={src} />}
                {fileType[index].split('/')[0] === 'video' && (
                  <video src={src} />
                )}
              </div>

              <input
                value={fileName[index]}
                onChange={(e) => {
                  setFileName((prev) =>
                    prev.map((file, idx) =>
                      idx === index ? e.target.value : file
                    )
                  )
                }}
                className="text-[12px] w-[230px] text-center"
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default UploadSection
