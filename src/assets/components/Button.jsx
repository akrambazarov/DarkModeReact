import React from 'react'

const Button = ({text, className}) => {
  return (
    <button className={`py-2 px-4 rounded-md font-poppins ${className}`}>
    {text}
    </button>
  )
}

export default Button