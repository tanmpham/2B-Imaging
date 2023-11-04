'use client'

import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { HiHashtag } from 'react-icons/hi2'

import { VscCalendar } from 'react-icons/vsc'
import Logo from './shared/Logo/Logo'

import { format } from 'date-fns'
import { DateRange, RangeKeyDict } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import { useGlobalContext } from '@/context/global-context'
import { closeOnClickOutside } from '@/utils/closeOnClickOutside'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import DarkSwitch from './DarkSwitch'
import { Button } from './shared/Buttons/Button'

const style = {
  label: `ml-[2rem] hover:text-green_2 cursor-pointer group-hover:text-green_2`,
  input: `w-full outline-none px-[1rem] h-[28px] text-black text-[12px] font-semibold rounded-[var(--rounded-default)] mt-[.4rem] transition-transform ease-linear`,
}

function Navbar() {
  const { currentPatient, setCurrentPatient, selectedDate, setSelectedDate } =
    useGlobalContext()
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
    if (e.target.id === 'PatientID') {
      if (e.target.value === '') {
        setCurrentPatient({
          ...currentPatient,
          [e.target.id]: -1,
        })
      } else {
        setCurrentPatient({
          ...currentPatient,
          [e.target.id]: Number(e.target.value),
        })
      }
    } else {
      setCurrentPatient({
        ...currentPatient,
        [e.target.id]: e.target.value,
      })
    }
  }

  const router = useRouter()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSelectedDate(range)
    const { PatientID, FirstName, LastName, DateofBirth } = currentPatient
    router.push(
      `/gallery?${
        PatientID && PatientID !== -1 ? `patient-id=${PatientID}` : ''
      }${FirstName && `&firstname=${FirstName}`}${
        LastName && `&lastname=${LastName}`
      }${DateofBirth && `&dob=${DateofBirth}`}`
    )
  }

  const ref = useRef(null)

  return (
    <div className="w-[12vw] bg-navBg h-screen p-[22px] text-white flex flex-col justify-center">
      <Logo />
      <div className={`pl-[1.4rem] flex items-center justify-between`}>
        <FaUserAlt className="my-[40px] text-4xl" />
        <DarkSwitch />
      </div>

      <form
        action="#"
        id="patientSelection"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-[1rem]"
      >
        <div className="group">
          <label htmlFor="PatientID" className={style.label}>
            ID
          </label>
          <input
            id="PatientID"
            type="number"
            value={
              currentPatient.PatientID !== -1
                ? `${currentPatient.PatientID}`
                : ''
            }
            onChange={updateData}
            className={style.input}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="LastName" className={style.label}>
            Last
          </label>
          <input
            id="LastName"
            type="text"
            value={currentPatient.LastName}
            onChange={updateData}
            className={style.input}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="FirstName" className={style.label}>
            First
          </label>
          <input
            id="FirstName"
            type="text"
            value={currentPatient.FirstName}
            onChange={updateData}
            className={style.input}
            required
          />
        </div>

        <div className="group">
          <label htmlFor="DateofBirth" className={style.label}>
            DOB
          </label>

          <input
            id="DateofBirth"
            type="date"
            value={currentPatient.DateofBirth}
            onChange={updateData}
            className={style.input}
            required
          />
        </div>
        <div className="flex items-center justify-center gap-x-[1rem] mt-[.4rem]">
          <Button
            onClick={() => {
              setCurrentPatient({
                PatientID: -1,
                LastName: '',
                FirstName: '',
                DateofBirth: '',
              })
            }}
            form=""
            variant={'error'}
            className={`w-fit`}
          >
            Clear
          </Button>
          <Button form="patientSelection" className={`w-fit`}>
            Search
          </Button>
        </div>
      </form>

      <div className={`mt-[4rem] flex flex-col space-y-[40px] justify-between`}>
        <Link href="/tags">
          <HiHashtag className="text-6xl ml-[1rem] cursor-pointer hover:text-green_2 hover:translate-x-[.2rem] active:translate-x-[-.2rem] transition-transform ease-in" />
        </Link>

        <VscCalendar
          onClick={() => {
            setStartDate(new Date())
            setEndDate(new Date())
          }}
          className="text-6xl ml-[1rem] cursor-pointer hover:text-green_2 hover:translate-x-[.2rem] active:translate-x-[-.2rem] transition-transform ease-in"
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
            animation={'custom'}
            className="text-[14px] pl-[.5rem] pr-[.2rem] py-[.1rem] hover:translate-x-[.2rem] active:translate-x-[-.2rem]"
          >
            Select Date <BsArrowRightShort className="text-[26px]" />
          </Button>
        </div>
      </div>

      <div
        ref={ref}
        className={`${
          isCalOpen ? 'block' : 'hidden'
        } absolute z-[100] bottom-[1rem] left-[14rem]`}
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
