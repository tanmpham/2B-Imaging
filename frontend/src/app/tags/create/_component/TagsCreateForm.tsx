'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { useRouter } from 'next/navigation'
import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

interface Props {
  tagName: string
  setTagName: Dispatch<SetStateAction<string>>
  handleSubmitTagCreation: (e: FormEvent<HTMLFormElement>) => void
}
function TagsCreateForm({
  tagName,
  setTagName,
  handleSubmitTagCreation,
}: Props) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTagName(e.target.value)
  }

  const router = useRouter()
  return (
    <div className={`w-[500px] h-fit bg-grey_3 rounded-[16px] mt-[5.8rem]`}>
      <form
        id="formCreateTag"
        onSubmit={handleSubmitTagCreation}
        className={`p-[3rem] flex flex-col gap-y-[1.4rem]`}
      >
        <label htmlFor="createtag" className="text-[34px] font-bold">
          Create a new #tag:
        </label>
        <input
          id="createtag"
          value={tagName}
          onChange={handleChange}
          required
          className="bg-transparent outline-none border border-stone-600 focus:border-white rounded-[6px] w-full py-[1rem] px-[1.2rem] text-[20px] transition-colors ease-in"
        />

        <div className="w-full flex items-center justify-end mt-[1rem] gap-x-[1rem]">
          <Button
            variant={'error'}
            form=""
            onClick={() => {
              router.push(`${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/tags`)
            }}
          >
            Cancel
          </Button>
          <Button form="formCreateTag">Create</Button>
        </div>
      </form>
    </div>
  )
}
export default TagsCreateForm
