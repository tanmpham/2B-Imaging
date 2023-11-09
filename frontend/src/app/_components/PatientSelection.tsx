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
  thead: 'min-w-[150px]',
  td: 'border-t border-dashed border-white py-[.5rem] ease-linear max-w-[150px] overflow-x-auto',
  td__active: `bg-stone-300 text-black`,
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
    <div ref={ref} className="mt-[100px] ml-[30px] h-fit">
      <div className={`overflow-y-auto max-h-[80vh]`}>
        <table className="border-collapse w-[510px] text-center">
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
                id={`${PatientID}`}
                onClick={handleSelect}
                className={`hover:bg-stone-600 ${
                  patientSelected == PatientID && 'bg-stone-600'
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
            handleClick()
          }}
          className="hover:translate-y-[-.2rem] transition-transform ease-in"
        >
          Select
        </Button>
      </div>
    </div>
  )
}
export default PatientSelection
