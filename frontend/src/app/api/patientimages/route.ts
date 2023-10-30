import { getImagesByTag } from '@/functions'
import { ImageDto } from '@/interfaces/image.dto'
import { NextRequest, NextResponse } from 'next/server'

export const revalidate = 0
export async function GET(req: NextRequest) {
  const tag_id = req.nextUrl.searchParams.get('tag-id')

  if (tag_id) {
    const data = (await getImagesByTag(tag_id)) as ImageDto
    return NextResponse.json(data)
  }

  return new NextResponse('Missing required fields', { status: 400 })
}
