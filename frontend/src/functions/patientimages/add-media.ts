import { FilesUpload } from '@/interfaces/files-upload'

export async function addMedia(mediaUpload: FilesUpload) {
  const formData = new FormData()

  for (const file of mediaUpload.Files) {
    formData.append('filesData', file)
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_IMAGES_HOST_SVC}/add-media`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    }
  )

  if (!res.ok) {
    throw new Error('Failed to add media')
  }

  return res.json()
}
