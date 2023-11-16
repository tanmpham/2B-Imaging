export interface TagDto {
  TagID: number
  Tag: string
  UseCount: number
}

export interface TagCreateDto {
  Tag: string
  UseCount: number
  ImagesID: string[]
}
