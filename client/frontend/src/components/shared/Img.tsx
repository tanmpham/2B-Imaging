import React from 'react';

interface Props {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}

function Img({ src, className, style }: Props): React.ReactElement {
  return (
    <img
      alt={alt}
      src={src}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}

export default Img
