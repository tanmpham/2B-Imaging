interface Props {
  src: string
  alt?: string
  className?: string
}

function Img({ src, alt = 'image', className }: Props) {
  return (
    <img
      alt={alt}
      src={src}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}

export default Img
