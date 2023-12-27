import { addMedia, getImagesByPatient, getImagesByTag } from '@/functions'
import { FilesUpload } from '@/interfaces/files-upload'
import { ImageDto } from '@/interfaces/image.dto'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(req: NextRequest) {
  const tag_id = req.nextUrl.searchParams.get('tag-id')
  const patient_id = req.nextUrl.searchParams.get('patient-id')

  if (tag_id && !patient_id) {
    const data = (await getImagesByTag(tag_id)) as ImageDto[]
    return NextResponse.json(data)
  }

  if (patient_id && !tag_id) {
    const data = (await getImagesByPatient(patient_id)) as ImageDto[]
    return NextResponse.json(data)
  }

  return new NextResponse('Missing required fields', { status: 400 })
}

export async function POST(req: NextRequest) {
  const data = (await req.json()) as FilesUpload

  const serverRes = await addMedia(data)

  return NextResponse.json({
    message: 'Media added',
    status: 201,
    serverResponse: serverRes,
  })
}
