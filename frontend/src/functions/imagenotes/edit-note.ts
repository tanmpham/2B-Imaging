import { NoteEditDto } from '@/interfaces/note.dto'

export async function editNote(note: NoteEditDto) {
  try {
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
      throw new Error(`Failed to edit note: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (err: any) {
    console.error(err)
    throw err
  }
}
