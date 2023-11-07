import React from 'react'
import { Button } from '../shared/Buttons/Button'

interface Props {}

function NoteCreateForm({}: Props) {
  return (
    <div className="bg-blue-300 w-full py-[1rem] px-[1.4rem]">
      <div className="font-bold">Add note:</div>
      <textarea className="outline-none w-full mt-[.4rem] px-[1rem] pt-[.4rem]" />
      <Button
        variant={'black'}
        size={'custom'}
        className="mt-[.2rem] text-[13px] px-[.4rem] py-[.2rem]"
      >
        Add
      </Button>
    </div>
  )
}

export default NoteCreateForm
