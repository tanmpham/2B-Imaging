import { getTagsByImage } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(req: NextRequest) {
  const image_id = req.nextUrl.searchParams.get('image-id')

  if (image_id) {
    const data = (await getTagsByImage(image_id)) as ImageDto
    return NextResponse.json(data)
  }

  return new NextResponse('Missing required fields', { status: 400 })
}
