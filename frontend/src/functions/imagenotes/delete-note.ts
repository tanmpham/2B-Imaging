export async function deleteNote(NoteID: string) {
  try {
    const res = await fetch(`${process.env.CLIENT_API}/imagenotes/${NoteID}`, {
      method: 'DELETE',
    })

    if (!res.ok) {
      throw new Error(`Failed to edit note: ${res.status} ${res.statusText}`)
    }

    return res.json()
  } catch (err: any) {
    console.error(err)
    throw err
  }
}
