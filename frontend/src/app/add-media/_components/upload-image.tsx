import React from 'react'

const style = {
  addBtn: {
    container: ``,
    icon: ``,
  },
}

type Props = {}

function UploadImageSection({}: Props) {
  const [imagesSrc, setImagesSrc] = React.useState<string[]>([])
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.files)
    if (!e.target.files?.length) return
    for (const file of e.target.files) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImagesSrc((prev) => [...prev, reader.result as string])
        // console.log(reader)
      }
      reader.onerror = () => {
        console.log(reader.error)
      }
    }
  }
  // console.log(imagesSrc, imagesSrc.length)
  return (
    <div className="flex items-center">
      <form>
        <input
          onChange={onChange}
          id="images_upload"
          type="file"
          //accept="video/mp4"
          // accept="image/*"
          multiple
        />
      </form>
    </div>
  )
}

export default UploadImageSection
