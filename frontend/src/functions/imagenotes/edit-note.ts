import { NoteEditDto } from '@/interfaces/note.dto'

export async function editNote(note: NoteEditDto) {
  const res = await fetch(
    `${process.env.CLIENT_API}/imagenotes/${note.NoteID}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }
  )

  if (!res.ok) {
    throw new Error('Failed to edit note')
  }

  return res.json()
}
