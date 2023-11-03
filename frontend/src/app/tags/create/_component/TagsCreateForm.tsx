'use client'

import { Button } from '@/components/shared/Buttons/Button'
import { toasterStyle } from '@/constants/toasterStyle'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'
import toast from 'react-hot-toast'

interface Props {}
function TagsCreateForm({}: Props) {
  const [tagName, setTagName] = useState('')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTagName(e.target.value)
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    async function createTag() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/api/tags`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Tag: tagName }),
          }
        )
        if (!res.ok) {
          toast.error('Failed to fetch data', toasterStyle)
        } else {
          toast.success(`#${tagName} added!`)
          window.location.href = `${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/tags`
        }
      } catch (error) {
        console.error('Create tag error:', error)
        toast.error('Failed to create tag.', toasterStyle)
      }
    }

    createTag()
  }
  const router = useRouter()
  return (
    <div className={`w-[500px] h-fit bg-grey_3 rounded-[16px] mt-[5.8rem]`}>
      <form
        id="formCreateTag"
        onSubmit={handleSubmit}
        className={`p-[3rem] flex flex-col gap-y-[1.4rem]`}
      >
        <label htmlFor="createtag" className="text-[34px] font-bold">
          Create a new #tag:
        </label>
        <input
          id="createtag"
          value={tagName}
          onChange={handleChange}
          className="bg-transparent outline-none border border-stone-600 focus:border-white rounded-[6px] w-full py-[1rem] px-[1.2rem] text-[20px]"
        />

        <div className="w-full flex items-center justify-end mt-[1rem] gap-x-[1rem]">
          <Button
            variant={'error'}
            form=""
            onClick={() => {
              router.push(`${process.env.NEXT_PUBLIC_CLIENT_FRONTEND_URL}/tags`)
            }}
            className="hover:translate-y-[-.2rem] transition-transform ease-linear"
          >
            Cancel
          </Button>
          <Button
            form="formCreateTag"
            className="hover:translate-y-[-.2rem] transition-transform ease-linear"
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  )
}
export default TagsCreateForm
