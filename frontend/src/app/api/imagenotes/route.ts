import { addNote, getNotes } from '@/functions'
import { NoteCreateDto, NoteDto } from '@/interfaces/note.dto'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(req: NextRequest) {
  const image_id = req.nextUrl.searchParams.get('image-id')

  if (image_id) {
    const data = (await getNotes(image_id)) as NoteDto
    return NextResponse.json(data)
  }

  return new NextResponse('Missing image ID', { status: 400 })
}

export async function POST(req: Request) {
  const data = (await req.json()) as NoteCreateDto

  const serverRes = (await addNote(data)) as NoteCreateDto

  return NextResponse.json({
    message: 'Note created',
    status: 201,
    noteCreated: serverRes,
  })
}
