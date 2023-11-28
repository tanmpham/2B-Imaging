import { NoteDto } from '@/interfaces/note.dto'
import React, { Dispatch, SetStateAction } from 'react'
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import { BiSolidPencil } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import NoteCreateForm from './NoteCreateForm'

const style = {
  icon: `hover:scale-[1.1] cursor-pointer active:translate-y-[.2rem] transition-transform ease-linear`,
  icon_border: `invisible group-hover:visible p-1 border border-black rounded-[10px] hover:bg-grey_6 active:scale-95 transition-all ease-linear`,
}

interface Props {
  notes: NoteDto[]
  imageID: number
  setIsReFetch: Dispatch<SetStateAction<boolean>>
}

function ImageNote({ notes, imageID, setIsReFetch }: Props) {
  const [isAdding, setisAdding] = React.useState(false)
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
          {notes.map(({ NoteID, Note, NoteCreatedAt }) => (
            <div key={NoteID} className="group">
              <div
                className={`text-[14px] font-bold flex items-center gap-x-[.4rem]`}
              >
                <div className={`mr-4`}>{NoteCreatedAt}</div>
                <div className={`${style.icon_border}`}>
                  <BiSolidPencil />
                </div>
                <div className={`${style.icon_border}`}>
                  <MdDelete />
                </div>
              </div>
              <div>{Note}</div>
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
