'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { toasterStyle } from '@/constants/toasterStyle'
import { useGlobalContext } from '@/context/global-context'
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
  td: 'border-t border-dashed border-black dark:border-white py-[.5rem] ease-linear max-w-[140px] overflow-x-auto',
  td__active: `bg-stone-600 text-white dark:bg-stone-300 dark:text-black`,
}

function PatientSelection({ patients }: Props) {
  const { currentPatient } = useGlobalContext()
  const [patientSelected, setPatientSelected] = useState(-1)
  const ref = useRef(null)

  const handleSelect = (e: MouseEvent<HTMLTableRowElement>) => {
    setPatientSelected(Number(e.currentTarget.id))
    closeOnClickOutside(ref, () => {
      setPatientSelected(-1)
    })
  }

  const router = useRouter()
  const handleClick = () => {
    if (patientSelected === -1) {
      toast('Please select a patient.', toasterStyle)
    } else {
      toast.success('Patient Selected!', toasterStyle)
      router.push(`/gallery?patient-id=${patientSelected}`)
    }
  }
  // console.log(currentPatient)

  return (
    <div ref={ref} className="mt-[100px] ml-[23px] 2xl:ml-[30px] h-fit">
      <div className={`overflow-y-auto max-h-[80vh]`}>
        <table className="border-collapse w-[383px] 2xl:w-[520px] table-auto text-center">
          <thead>
            <tr>
              <th
                className={`py-[.4rem] border-r-[1px] border-black dark:border-white`}
              >
                ID
              </th>
              <th className={`border-r-[1px] border-black dark:border-white`}>
                Last
              </th>
              <th className={`border-r-[1px] border-black dark:border-white`}>
                First
              </th>
              <th className={``}>DOB</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(({ PatientID, LastName, FirstName, DateofBirth }) => (
              <tr
                key={PatientID}
                id={`${PatientID}`}
                onClick={handleSelect}
                className={`hover:bg-stone-400 dark:hover:bg-stone-600 ${
                  patientSelected == PatientID &&
                  'bg-stone-400 dark:bg-stone-600'
                } active:scale-[.98] transition-all ease-linear`}
              >
                <td
                  className={`${style.td} ${
                    currentPatient.PatientID === PatientID && style.td__active
                  }`}
                >
                  {PatientID}
                </td>
                <td
                  className={`${style.td} ${
                    currentPatient.LastName.length > 0 &&
                    LastName.substring(
                      0,
                      currentPatient.LastName.length
                    ).toUpperCase() === currentPatient.LastName.toUpperCase() &&
                    style.td__active
                  }`}
                >
                  {LastName}
                </td>
                <td
                  className={`${style.td} ${
                    currentPatient.FirstName.length > 0 &&
                    FirstName.substring(
                      0,
                      currentPatient.FirstName.length
                    ).toUpperCase() ===
                      currentPatient.FirstName.toUpperCase() &&
                    style.td__active
                  }`}
                >
                  {FirstName}
                </td>
                <td
                  className={`${style.td} ${
                    currentPatient.DateofBirth.length > 0 &&
                    format(new Date(DateofBirth), 'yyyy-MM-dd').substring(
                      0,
                      currentPatient.DateofBirth.length
                    ) === currentPatient.DateofBirth &&
                    style.td__active
                  }`}
                >
                  {format(new Date(DateofBirth), 'MM/dd/yyyy')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`flex justify-end mt-[1rem] gap-x-[.8rem]`}>
        <Button
          onClick={() => {
            router.push(
              `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/patients/new`
            )
          }}
        >
          Add
        </Button>
        <Button
          variant={'warning'}
          onClick={() => {
            toast.success('Edit Button', toasterStyle)
          }}
        >
          Edit
        </Button>
        <Button
          variant={'error'}
          onClick={() => {
            toast.error('Delete Button', toasterStyle)
          }}
        >
          Delete
        </Button>
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
