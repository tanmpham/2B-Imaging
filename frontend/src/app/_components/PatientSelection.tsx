'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { toasterStyle } from '@/constants/toasterStyle'
import { PatientDto } from '@/interfaces/patient.dto'
import { closeOnClickOutside } from '@/utils/closeOnClickOutside'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import { MouseEvent, useRef, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {
  patients: PatientDto[]
}

const style = {
  thead: 'min-w-[150px]',
  td: 'border-t border-dashed border-white py-[.5rem] ease-linear',
}

function PatientSelection({ patients }: Props) {
  const [patientSelected, setPatientSelected] = useState('')
  const ref = useRef(null)

  const handleSelect = (e: MouseEvent<HTMLTableRowElement>) => {
    setPatientSelected(e.currentTarget.id)
    closeOnClickOutside(ref, () => {
      setPatientSelected('')
    })
  }

  const router = useRouter()
  const handleClick = () => {
    if (patientSelected === '') {
      toast.error('Please select a patient.', toasterStyle)
    } else {
      toast.success('Patient Selected!', toasterStyle)
      router.push(`/gallery/${patientSelected}`)
    }
  }

  return (
    <div
      ref={ref}
      className="max-h-screen h-fit overflow-y-auto mt-[100px] ml-[30px]"
    >
      <table className="border-collapse w-[480px] text-center">
        <thead>
          <tr>
            <th
              className={`py-[.4rem] min-w-[60px] border-r-[1px] border-white`}
            >
              ID
            </th>
            <th className={`${style.thead} border-r-[1px] border-white`}>
              Last
            </th>
            <th className={`${style.thead} border-r-[1px] border-white`}>
              First
            </th>
            <th className={`${style.thead}`}>DOB</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(({ PatientID, LastName, FirstName, DateofBirth }) => (
            <tr
              key={PatientID}
              id={PatientID}
              onClick={handleSelect}
              className={`hover:bg-gray-400 hover:text-black ${
                patientSelected == PatientID && 'bg-gray-400 text-black'
              } active:scale-[.98] transition-all ease-linear`}
            >
              <td className={style.td}>{PatientID}</td>
              <td className={style.td}>{LastName}</td>
              <td className={style.td}>{FirstName}</td>
              <td className={style.td}>
                {format(new Date(DateofBirth), 'MM/dd/yyyy')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={`w-[480px] flex justify-end mt-[1rem]`}>
        <Button
          onClick={() => {
            handleClick()
          }}
        >
          Select
        </Button>
      </div>
    </div>
  )
}
export default PatientSelection
