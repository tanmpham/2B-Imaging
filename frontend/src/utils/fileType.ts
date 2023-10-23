export const fileType = (filename: string) => {
  const parts = filename.split('.')
  return parts[parts.length - 1]
}
