'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { PatientDto } from '@/interfaces/patient.dto'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GoTriangleDown } from 'react-icons/go'
import { MdDriveFolderUpload } from 'react-icons/md'
import UploadSection from './upload-section'

const style = {
  type: {
    active: `text-[24px] w-[140px] flex justify-center py-[1rem] border border-white active:scale-95 hover:opacity-90 transition-all ease-linear`,
    inactive: `text-[24px] w-[140px] flex justify-center py-[1rem] text-stone-600 hover:text-stone-400 border border-transparent hover:border-stone-400 cursor-pointer active:scale-95 transition-all ease-linear`,
  },
}

type Props = {
  patients: PatientDto[]
}

function AddMediaPage({ patients }: Props) {
  const [selectedPatient, setSelectedPatient] = React.useState<PatientDto>(
    patients[0]
  )
  const [filesName, setFilesName] = React.useState<string[]>([])
  const [filesType, setFilesType] = React.useState<string[]>([])
  const [filesSrc, setFilesSrc] = React.useState<string[]>([])
  const [isSearchingPatient, setIsSearchingPatient] = React.useState(false)
  const router = useRouter()

  console.log({
    patient: selectedPatient,
    file: {
      name: filesName,
      src: filesSrc,
      type: filesType,
    },
  })

  return (
    <div className="text-black dark:text-white m-auto bg-grey_2 dark:bg-grey_3 rounded-[10px] w-[84vw] h-[94vh] p-[2rem] flex gap-x-[3.4rem]">
      <div className={`flex flex-col gap-y-[1rem]`}>
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

        <UploadSection
          filesName={filesName}
          setFilesName={setFilesName}
          filesType={filesType}
          setFilesType={setFilesType}
          filesSrc={filesSrc}
          setFilesSrc={setFilesSrc}
        />
      </div>

      <div className={`flex flex-col gap-y-[1rem] w-fit mt-[4rem]`}>
        <div className="flex items-center gap-x-[2rem]">
          <div className={`text-[20px]`}>Add to Patient:</div>
          <div className={`relative`}>
            <div
              className={`px-[.8rem] py-[.5rem] border dark:border-stone-300 border-stone-700 dark:hover:border-white hover:border-black ${
                isSearchingPatient ? 'rounded-t-[10px]' : 'rounded-[10px]'
              } flex items-center gap-x-[1rem] cursor-pointer dark:text-stone-300 text-stone-700 group active:translate-y-[.2rem] transition-all ease-in`}
              onClick={() => setIsSearchingPatient((prev) => !prev)}
            >
              {`${selectedPatient.FirstName} ${selectedPatient.LastName}`}
              <GoTriangleDown className="text-[20px] group-hover:border-black dark:group-hover:text-white" />
            </div>
            <div
              className={`${
                !isSearchingPatient ? 'hidden' : 'absolute'
              } border dark:border-stone-300 border-stone-700 dark:hover:border-white hover:border-black py-[.5rem] px-[.8rem] w-full rounded-b-[10px]`}
            >
              {patients.map((patient) => (
                <div
                  key={patient.PatientID}
                  className="hover:bg-green_1 cursor-pointer"
                  onClick={() => {
                    setSelectedPatient(patient)
                    setIsSearchingPatient(false)
                  }}
                >{`${patient.FirstName} ${patient.LastName}`}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-[.6rem]">
          <Button>Save</Button>
          <Button variant={'error'} onClick={() => router.push('/')}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddMediaPage
