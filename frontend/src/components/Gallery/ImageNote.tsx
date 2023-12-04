import { toasterStyle } from '@/constants/toasterStyle'
import { NoteDto, NoteEditDto } from '@/interfaces/note.dto'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { Button } from '../shared/Buttons/Button'
import NoteCreateForm from './NoteCreateForm'

const style = {
  icon: `hover:scale-[1.1] cursor-pointer active:translate-y-[.2rem] transition-transform ease-linear`,
  icon_border: `invisible group-hover:visible p-1 border border-black rounded-[10px] hover:bg-grey_6 active:scale-95 transition-all ease-linear`,
  button: `!text-black !border-black`,
}

interface Props {
  notes: NoteDto[]
  imageID: number
  setIsReFetch: Dispatch<SetStateAction<boolean>>
}

function ImageNote({ notes, imageID, setIsReFetch }: Props) {
  const [isAdding, setisAdding] = React.useState(false)
  const [isEditing, setIsEditing] = React.useState<boolean[]>([])
  const [editData, setEditData] = React.useState<NoteDto[]>([])
  const [isTextAreaInitialHeight, setIsTextAreaInitialHeight] =
    React.useState(false)

  useEffect(() => {
    setEditData(notes)
    setIsEditing(Array(notes.length).fill(false))
  }, [notes])

  if (editData.length === 0) return null

  function handleNoteSave(NoteID: number, new_content: string, idx: number) {
    const noteData: NoteEditDto = {
      NoteID: NoteID,
      Note: new_content,
    }

    async function createNote(idx: number) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagenotes`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(noteData),
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`Note edited!`, toasterStyle)
          setIsReFetch((prev) => !prev)
          setIsEditing((prev) =>
            prev.map((item, index) => index === idx && !item)
          )
        }
      } catch (error) {
        console.error('Create tag error:', error)
        toast.error('Failed to create tag.', toasterStyle)
      }
    }

    createNote(idx)
  }

  function handleNoteDelete(NoteID: number) {
    async function deleteNote(NoteID: number) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/imagenotes?note-id=${NoteID}`,
          {
            method: 'DELETE',
          }
        )
        if (!res.ok) {
          console.error('Failed to fetch data')
        } else {
          toast.success(`Note deleted!`, toasterStyle)
          setIsReFetch((prev) => !prev)
        }
      } catch (error) {
        console.error('Create tag error:', error)
        toast.error('Failed to create tag.', toasterStyle)
      }
    }

    deleteNote(NoteID)
  }

  return (
    <div className="absolute right-[240px] w-[560px] h-[220px] bg-grey_2 text-black rounded-[10px] overflow-y-scroll">
      <div className={`relative`}>
        {isAdding && (
          <NoteCreateForm
            imageID={imageID}
            setIsReFetch={setIsReFetch}
            setisAdding={setisAdding}
          />
        )}
        <div className={`flex flex-col gap-y-[.4rem] px-[1.4rem] py-[.6rem]`}>
          {notes.map(({ NoteID, Note, NoteCreatedAt }, idx) => (
            <div key={NoteID} className="group">
              <div
                className={`text-[14px] font-bold flex items-center gap-x-[.4rem]`}
              >
                <div className={`mr-4`}>{NoteCreatedAt}</div>
                <div
                  onClick={() => {
                    setIsEditing((prev) =>
                      prev.map((item, index) => index === idx && !item)
                    )

                    setIsTextAreaInitialHeight(false)
                  }}
                  className={`${style.icon_border}`}
                >
                  <BiSolidPencil />
                </div>
                <div
                  onClick={() => handleNoteDelete(NoteID)}
                  className={`${style.icon_border}`}
                >
                  <MdDelete />
                </div>
              </div>
              {!isEditing[idx] ? (
                <div>{Note}</div>
              ) : (
                <div>
                  <textarea
                    name="text"
                    onMouseOver={(e) => {
                      if (!isTextAreaInitialHeight) {
                        e.currentTarget.style.height = ''
                        e.currentTarget.style.height =
                          e.currentTarget.scrollHeight + 'px'

                        setIsTextAreaInitialHeight(true)
                      }
                    }}
                    value={editData[idx].Note}
                    onChange={(e) => {
                      const newValue = e.target.value
                      setEditData((prev) =>
                        prev.map((item, index) =>
                          index === idx ? { ...item, Note: newValue } : item
                        )
                      )
                    }}
                    className="dark:text-white w-full outline-none pl-1"
                  />

                  <div className={`flex gap-x-[.7rem] items-center`}>
                    <Button
                      variant={'error'}
                      onClick={() => {
                        setIsEditing((prev) =>
                          prev.map((item, index) => index === idx && !item)
                        )
                      }}
                      className={`${style.button} hover:!border-red-600 dark:!hover:border-red-600 hover:!text-red-600 dark:hover:!text-red-600`}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant={'green'}
                      onClick={(e) =>
                        handleNoteSave(NoteID, editData[idx].Note, idx)
                      }
                      className={`${style.button} hover:!border-green-700 hover:!text-green-700 dark:!hover:border-green-700 dark:!hover:text-green-700`}
                    >
                      Save
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          onClick={() => {
            setisAdding((prev) => !prev)
          }}
          className={`absolute top-[.2rem] right-[.2rem] text-[34px] ${style.icon}`}
        >
          {isAdding ? <AiOutlineCloseCircle /> : <AiOutlinePlusCircle />}
        </div>
      </div>
    </div>
  )
}

export default ImageNote
