import { NoteDto } from '@/interfaces/note.dto'
import React from 'react'
import { AiOutlineCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import NoteCreateForm from './NoteCreateForm'

const style = {
  icon: `hover:scale-[1.1] cursor-pointer active:translate-y-[.2rem] transition-transform ease-linear`,
}

interface Props {
  notes: NoteDto[]
}

function ImageNote({ notes }: Props) {
  const [isAdding, setisAdding] = React.useState(false)
  return (
    <div className="absolute right-[240px] w-[560px] h-[220px] bg-grey_2 text-black rounded-[10px] overflow-y-scroll">
      <div className={`relative`}>
        {isAdding && <NoteCreateForm />}
        <div className={`flex flex-col gap-y-[.4rem] px-[1.4rem] py-[.6rem]`}>
          {notes.map(({ NoteID, Note, NoteCreatedAt }) => (
            <div key={NoteID}>
              <div className={`text-[14px] font-bold`}>{NoteCreatedAt}</div>
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
