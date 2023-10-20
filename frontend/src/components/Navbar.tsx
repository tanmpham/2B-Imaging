'use client'

import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { HiHashtag } from 'react-icons/hi2'

import { VscCalendar } from 'react-icons/vsc'
import Logo from './shared/Logo/Logo'

import format from 'date-fns/format'
import { DateRange, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { useCurrentPatientContext } from '@/context/current-patient-context'
import { closeOnClickOutside } from '@/utils/closeOnClickOutside'
import Link from 'next/link'
import { Button } from './shared/Buttons/Button'

const style = {
  label: `ml-[2rem] hover:text-green_2 cursor-pointer group-hover:text-green_2`,
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
      <FaUserAlt className="ml-[1.4rem] my-[40px] text-4xl" />

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

      <div className={`mt-[4rem] flex flex-col space-y-[40px] justify-between`}>
        <Link href="/tags">
          <HiHashtag className="text-6xl ml-[1rem] cursor-pointer hover:text-green_2 active:scale-95 transition-transform ease-in" />
        </Link>

        <VscCalendar
          onClick={() => {
            setStartDate(new Date())
            setEndDate(new Date())
          }}
          className="text-6xl ml-[1rem] cursor-pointer hover:text-green_2 active:scale-95 transition-transform ease-in"
        />

        <div className="flex flex-col space-y-[1rem] items-center">
          <input
            id="dob"
            ref={ref}
            value={`${
              formattedStartDate !== formattedEndDate
                ? range
                : formattedStartDate
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
          <Button
            size="custom"
            className="text-[14px] pl-[.5rem] pr-[.2rem] py-[.1rem] hover:translate-x-[.2rem] transition-transform ease-linear"
          >
            Select Date <BsArrowRightShort className="text-[26px]" />
          </Button>
        </div>
      </div>

      <div
        ref={ref}
        className={`${
          isCalOpen ? 'block' : 'hidden'
        } absolute z-10 bottom-[1rem] left-[14rem]`}
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
