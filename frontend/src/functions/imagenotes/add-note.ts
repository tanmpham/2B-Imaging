import { NoteCreateDto } from '@/interfaces/note.dto'

export async function addNote(note: NoteCreateDto) {
  const res = await fetch(`${process.env.CLIENT_API}/imagenotes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

  if (!res.ok) {
    throw new Error('Failed to create tag')
  }

  return res.json()
}
