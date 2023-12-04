import { toasterStyle } from '@/constants/toasterStyle'
import { format } from 'date-fns'
import React from 'react'
import toast from 'react-hot-toast'
import { Button } from '../shared/Buttons/Button'

interface Props {
  imageID: number
  setIsReFetch: React.Dispatch<React.SetStateAction<boolean>>
  setisAdding: React.Dispatch<React.SetStateAction<boolean>>
}

function NoteCreateForm({ imageID, setIsReFetch, setisAdding }: Props) {
  const [userInput, setUserInput] = React.useState('')

  function handleNoteCreate() {
    const formData = {
      Note: userInput,
      NoteCreatedAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      ImageID: imageID,
    }

    async function addNote() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagenotes`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`Note added!`, toasterStyle)
          setIsReFetch((prev) => !prev)
          setisAdding(false)
        }
      } catch (error) {
        console.error('Create tag error:', error)
        toast.error('Server Error: fail to add note.', toasterStyle)
      }
    }

    addNote()
  }
  return (
    <div className="bg-blue-300 w-full py-[1rem] px-[1.4rem]">
      <div className="font-bold">Add note:</div>
      <textarea
        onChange={(e) => {
          setUserInput(e.target.value)
        }}
        className="outline-none w-full mt-[.4rem] px-[1rem] pt-[.4rem] text-black dark:text-white"
      />
      <Button
        variant={'black'}
        size={'custom'}
        onClick={() => {
          handleNoteCreate()
        }}
        className="mt-[.2rem] text-[13px] px-[.4rem] py-[.2rem]"
      >
        Add
      </Button>
    </div>
  )
}

export default NoteCreateForm
