import { TagCreateDto } from '@/interfaces/tag.dto'

export async function createTag(tag: TagCreateDto) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API}/imagetags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tag),
  })

  if (!res.ok) {
    throw new Error('Failed to create tag')
  }

  return res.json()
}
