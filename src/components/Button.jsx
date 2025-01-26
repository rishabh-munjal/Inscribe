import React from 'react'

function Button({
    children,
    type = 'button',
    bgcolor = 'bg-indigo-600',
    textColor = 'text-white',
    className = '',
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${bgcolor} ${textColor}`}{...props}>
      {children}
    </button>
  )
}

export default Button
