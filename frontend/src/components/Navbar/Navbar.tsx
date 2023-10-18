'use client'

import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { HiHashtag } from 'react-icons/hi2'
import { VscCalendar } from 'react-icons/vsc'
import Logo from '../shared/Logo/Logo'

import format from 'date-fns/format'
import { DateRange, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { useCurrentPatientContext } from '@/context/current-patient-context'
import { closeOnClickOutside } from '@/utils/closeOnClickOutside'
import { Button } from '../shared/Buttons/Button'

const style = {
  label: `ml-[2rem] hover:text-green cursor-pointer group-hover:text-green`,
  input: `w-full outline-none px-[1rem] h-[28px] text-black text-[12px] font-semibold rounded-[var(--rounded-default)] mt-[.4rem] hover:scale-[1.02] transition-transform ease-linear`,
}

function Navbar() {
  const { currentPatient, setCurrentPatient, selectedDate, setSelectedDate } =
    useCurrentPatientContext()
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [isCalOpen, setIsCalOpen] = useState(false)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const formattedStartDate = format(
    startDate ? new Date(startDate) : new Date(),
    'MM/dd/yyyy'
  )
  const formattedEndDate = format(
    endDate ? new Date(endDate) : new Date(),
    'MM/dd/yyyy'
  )

  const range = `${formattedStartDate} - ${formattedEndDate}`

  const handleDateRangeSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate!)
    setEndDate(ranges.selection.endDate!)
  }

  const updateData = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentPatient({
      ...currentPatient,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSelectedDate(range)
    console.log(currentPatient)
    console.log(selectedDate)
  }

  const ref = useRef(null)

  return (
    <div className="w-[12vw] bg-navBg h-screen p-[22px] text-white">
      <Logo />
      <FaUserAlt className="ml-[1.4rem] my-[30px] text-4xl" />

      <form
        action="#"
        id="patientSelection"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-[1rem]"
      >
        <div className="group">
          <label htmlFor="id" className={style.label}>
            ID
          </label>
          <input
            id="id"
            type="text"
            onChange={updateData}
            className={style.input}
          />
        </div>

        <div className="group">
          <label htmlFor="last" className={style.label}>
            Last
          </label>
          <input
            id="last"
            type="text"
            onChange={updateData}
            className={style.input}
          />
        </div>

        <div className="group">
          <label htmlFor="first" className={style.label}>
            First
          </label>
          <input
            id="first"
            type="text"
            onChange={updateData}
            className={style.input}
          />
        </div>

        <div className="group">
          <label htmlFor="dob" className={style.label}>
            DOB
          </label>
          <input
            id="dob"
            type="date"
            onChange={updateData}
            className={style.input}
          />
        </div>
        <Button
          form="patientSelection"
          className={`mt-[.4rem] ml-[1rem] w-fit`}
        >
          Search
        </Button>
      </form>

      <div className={`mt-[4rem] h-[24%] flex flex-col justify-between`}>
        <HiHashtag className="text-6xl ml-[1rem] cursor-pointer hover:text-green active:scale-95 transition-transform ease-in" />

        <VscCalendar className="text-6xl ml-[1rem] cursor-pointer hover:text-green active:scale-95 transition-transform ease-in" />

        <input
          id="dob"
          ref={ref}
          value={`${
            formattedStartDate !== formattedEndDate ? range : formattedStartDate
          }`}
          readOnly
          className={`${style.input} text-center`}
          onClick={() => {
            setIsCalOpen((prev) => !prev)
            closeOnClickOutside(ref, () => {
              setIsCalOpen(false)
            })
          }}
        />
      </div>

      <div
        ref={ref}
        className={`${
          isCalOpen ? 'block' : 'hidden'
        } absolute z-10 bottom-[2rem] left-[14rem]`}
      >
        <DateRange
          ranges={[selectionRange]}
          rangeColors={['#4b7772']}
          onChange={handleDateRangeSelect}
          showDateDisplay={false}
        />
      </div>
    </div>
  )
}
export default Navbar
