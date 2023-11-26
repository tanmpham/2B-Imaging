import React, { useState } from 'react'

const Sliders = ({ brightness, setBrightness, contrast, setContrast }) => {
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
            className="block text-sm font-medium text-gray-700"
          >
            Brightness
          </label>
          <input
            type="range"
            id="brightness"
            name="brightness"
            min="0"
            max="200"
            value={brightness}
            onChange={handleBrightnessChange}
            className="mt-1 w-full"
          />
        </div>
        <div>
          <label
            htmlFor="contrast"
            className="block text-sm font-medium text-gray-700"
          >
            Contrast
          </label>
          <input
            type="range"
            id="contrast"
            name="contrast"
            min="0"
            max="200"
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
