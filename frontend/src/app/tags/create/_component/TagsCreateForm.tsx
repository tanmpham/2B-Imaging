'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { FormEvent } from 'react'

interface Props {}
function TagsCreateForm({}: Props) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }
  return (
    <div className={`w-[500px] h-fit bg-grey_3 rounded-[16px] mt-[5.8rem]`}>
      <form
        onSubmit={handleSubmit}
        className={`p-[3rem] flex flex-col gap-y-[1.4rem]`}
      >
        <label htmlFor="createtag" className="text-[40px] font-bold">
          Create a new #tag:
        </label>
        <input
          id="createtag"
          className="bg-transparent outline-none border border-stone-600 focus:border-white rounded-[6px] w-full py-[1rem] px-[1.2rem] text-[20px]"
        />

        <div className="w-full flex items-center justify-end mt-[1rem] gap-x-[1rem]">
          <Button
            variant={'error'}
            className="hover:translate-y-[-.2rem] transition-transform ease-linear"
          >
            Cancel
          </Button>
          <Button className="hover:translate-y-[-.2rem] transition-transform ease-linear">
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
export default TagsCreateForm
