import React from 'react'

export const InputBox = ({label, setAttribute, description}) => {
  return (
    <div className='flex flex-col gap-2 my-4'>
        <div className='flex flex-col leading-relaxed'>
          <label className='text-gray-600 font-bold' htmlFor={label}>{label}</label>
          <p className='text-sm text-gray-400'>{description}</p>
        </div>
        <input className='border rounded py-1 px-3 text-sm text-gray-600 focus:outline-none active:outline-none' onChange={(e)=>setAttribute(e.target.value)} />
    </div>
  )
}
