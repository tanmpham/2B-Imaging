import React, { useEffect, useRef, useState } from 'react'

interface DrawCanvasProps {
  imgSrc: string
}

const DrawCanvasCompare: React.FC<DrawCanvasProps> = ({ imgSrc }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isDrawing, setIsDrawing] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const img = new Image()
    img.src = imgSrc

    img.onload = () => {
      const aspectRatio = img.width / img.height
      const canvasWidth = 494 // Set the desired width (same as non-drawing Img)
      const canvasHeight = canvasWidth / aspectRatio

      canvas.width = canvasWidth
      canvas.height = canvasHeight

      context.drawImage(img, 0, 0, canvasWidth, canvasHeight)
    }
  }, [imgSrc])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.strokeStyle = 'green'
    context.lineJoin = 'round'
    context.lineCap = 'round'
    context.lineWidth = 5

    context.beginPath()
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    context.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseOut={stopDrawing}
      style={{ cursor: 'crosshair' }}
      className="rounded-[6px]"
    />
  )
}

export default DrawCanvasCompare
