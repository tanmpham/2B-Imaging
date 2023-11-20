import React from 'react'

export function closeOnPressEsc(
  componentRef: React.RefObject<any>,
  closeAction: () => void
) {
  const newDiv = document.createElement('div')
  newDiv.innerText = ''

  const handleEscape = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      closeAction()
    }
  }

  document.addEventListener('keydown', handleEscape)

  document.body.appendChild(newDiv)

  return () => {
    document.removeEventListener('keydown', handleEscape)
    document.body.removeChild(newDiv)
  }
}
