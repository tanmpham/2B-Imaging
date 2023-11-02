export async function createTag(tagName: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_API}/imagetags`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Tag: tagName }),
  })

  if (!res.ok) {
    throw new Error('Failed to create tag')
  }

  return res.json()
}
