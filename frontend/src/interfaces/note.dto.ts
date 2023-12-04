export interface NoteDto {
  NoteID: number
  Note: string
  NoteCreatedAt: string
  ImageID: number
}

export interface NoteCreateDto {
  Note: string
  NoteCreatedAt: string
  ImageID: number
}

export interface NoteEditDto {
  NoteID: number
  Note: string
}
