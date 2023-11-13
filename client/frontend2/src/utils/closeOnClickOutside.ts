import React from 'react'

export function closeOnClickOutside(
  componentRef: React.RefObject<any>,
  closeAction: () => void
) {
  const newDiv = document.createElement('div')
  newDiv.innerText = ''

  const handleClickOutside = (event: MouseEvent): void => {
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node)
    ) {
      closeAction()
    }
  }

  document.addEventListener('mousedown', handleClickOutside)

  document.body.appendChild(newDiv)

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.body.removeChild(newDiv)
  }
}
