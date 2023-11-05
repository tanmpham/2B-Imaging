import { getAnImage } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(req: Request, params: { imageID: string }) {
  if (params.imageID) {
    const data = (await getAnImage(params.imageID)) as ImageDto
    return NextResponse.json(data)
  }

  return new NextResponse('Missing image ID', { status: 400 })
}
