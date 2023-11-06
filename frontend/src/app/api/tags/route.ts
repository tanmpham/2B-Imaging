import { createTag, getTagsByImage } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { TagCreateDto } from '@/interfaces/tag.dto'
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

export async function POST(req: Request) {
  const data = (await req.json()) as TagCreateDto

  if (data.Tag && data.UseCount) {
    const serverRes = (await createTag(data)) as TagCreateDto
    return NextResponse.json({
      message: 'Tag created',
      status: 201,
      tagCreated: serverRes,
    })
  }

  return new NextResponse('Missing required fields', { status: 400 })
}
