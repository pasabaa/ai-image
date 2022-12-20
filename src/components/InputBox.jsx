import React from 'react'

export const InputBox = ({label, setAttribute}) => {
  return (
    <div>
        <label htmlFor={label}>{label}</label>
        <input type="text" onChange={(e)=>setAttribute(e.target.value)} />
    </div>
  )
}
