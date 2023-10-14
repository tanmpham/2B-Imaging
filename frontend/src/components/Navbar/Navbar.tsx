'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { DateRange, RangeKeyDict } from 'react-date-range'
import { FaUserAlt } from 'react-icons/fa'
import { HiHashtag } from 'react-icons/hi2'
import { VscCalendar } from 'react-icons/vsc'
import Logo from '../shared/Logo/Logo'

import format from 'date-fns/format'

import { PatientDto } from '@/app/interfaces/patient.dto'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const style = {
  label: `ml-[2rem] hover:text-green cursor-pointer group-hover:text-green`,
  input: `w-full outline-none pl-[1rem] h-[28px] text-black text-[12px] font-semibold rounded-[var(--rounded-default)]`,
}

function Navbar() {
  // date state
  // const [startDate, setStartDate] = useState<Date | undefined>(new Date())
  // const [endDate, setEndDate] = useState<Date | undefined>(new Date())

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection',
  // }

  // const handleSelect = (ranges: RangeKeyDict) => {
  //   setStartDate(ranges.selection.startDate)
  //   setEndDate(ranges.selection.endDate)
  // }

  // const formattedStartDate = format(
  //   startDate ? new Date(startDate) : new Date(),
  //   'dd MMMM yy'
  // )
  // const formattedEndDate = format(
  //   endDate ? new Date(endDate) : new Date(),
  //   'dd MMMM yy'
  // )

  // const range = `[${formattedStartDate} ----- ${formattedEndDate}]`

  // console.log(range)
  const [data, setData] = useState<PatientDto>({
    id: '',
    last: '',
    first: '',
    dob: '',
  })

  const updateData = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className="w-[12%] bg-black h-screen p-[22px] text-white">
      <Logo />
      <FaUserAlt className="ml-[1.4rem] my-[30px] text-4xl" />

      <form
        action="#"
        id="patientSelection"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-[.4rem]"
      >
        <div className="group">
          <label htmlFor="id" className={style.label}>
            ID
          </label>
          <input id="id" onChange={updateData} className={style.input} />
        </div>

        <div className="group">
          <label htmlFor="last" className={style.label}>
            Last
          </label>
          <input id="last" onChange={updateData} className={style.input} />
        </div>

        <div className="group">
          <label htmlFor="first" className={style.label}>
            First
          </label>
          <input id="first" onChange={updateData} className={style.input} />
        </div>

        <div className="group">
          <label htmlFor="dob" className={style.label}>
            DOB
          </label>
          <input id="dob" onChange={updateData} className={style.input} />
        </div>
        <button
          form="patientSelection"
          className={`hover:text-green active:scale-95 transition-transform ease-in mt-[.4rem] ml-[1rem] px-[.4rem] rounded-[0.2rem] w-fit border border-white hover:border-green`}
        >
          Search
        </button>
      </form>

      <div className={`mt-[3rem] h-[44%] flex flex-col justify-between`}>
        <HiHashtag className="text-6xl ml-[1rem] cursor-pointer hover:text-green active:scale-95 transition-transform ease-in" />

        <VscCalendar className="text-6xl ml-[1rem] cursor-pointer hover:text-green active:scale-95 transition-transform ease-in" />

        <div
          className={`w-full h-[140px] bg-green flex items-center justify-center`}
        >
          {/* <DateRange
          ranges={[selectionRange]}
          rangeColors={['#4b7772']}
          onChange={handleSelect}
          showDateDisplay={false}
        /> */}
          Calendar
        </div>

        <input id="dob" className={`${style.input}`} />
      </div>
    </div>
  )
}
export default Navbar
