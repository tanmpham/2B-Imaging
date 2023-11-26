import React, { useState } from 'react'

const Sliders = () => {
  const [brightness, setBrightness] = useState(50)
  const [contrast, setContrast] = useState(50)

  const handleBrightnessChange = (event) => {
    setBrightness(event.target.value)
  }

  const handleContrastChange = (event) => {
    setContrast(event.target.value)
  }

  return (
    <div className="absolute bottom-0 left-0 p-4">
      <div className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="brightness"
            className="block text-sm font-medium text-black dark:text-white"
          >
            Brightness
          </label>
          <input
            type="range"
            id="brightness"
            name="brightness"
            min="0"
            max="100"
            value={brightness}
            onChange={handleBrightnessChange}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="contrast"
            className="block text-sm font-medium text-black dark:text-white"
          >
            Contrast
          </label>
          <input
            type="range"
            id="contrast"
            name="contrast"
            min="0"
            max="100"
            value={contrast}
            onChange={handleContrastChange}
            className="mt-1 w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Sliders
