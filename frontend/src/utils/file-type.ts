export const fileType = (src: string) => {
  const parts = src.split('.')
  return parts[parts.length - 1]
}
