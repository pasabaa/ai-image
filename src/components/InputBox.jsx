import React from 'react'

export const InputBox = ({label, setAttribute, description, placeholder, error}) => {
  return (
    <div className='flex flex-col gap-2 my-4'>
        <div className='flex flex-col leading-relaxed'>
          <label className='font-semibold uppercase' htmlFor={label}>{label}</label>
          <p className='text-xs text-gray-600 leading-relaxed'>{description}</p>
        </div>
        <input autoFocus placeholder={placeholder} className='border p-3 text-sm focus:outline-none active:outline-none' onChange={(e)=>setAttribute(e.target.value)} />
        {error && <h1 className="text-sm text-red-600 dark:text-red-400">Campo obligatorio.</h1>}
    </div>
  )
}

export const SelectBox = ({label, setAttribute, description}) => {

  const options = [
    {
      id: 1,
      size: '256x256'
    },
    {
      id: 2,
      size: '512x512'
    },
    {
      id: 3,
      size: '1024x1024'
    }
  ]

  return (
    <div className='flex flex-col gap-2 my-4'>
        <div className='flex flex-col leading-relaxed'>
          <label className='font-semibold uppercase' htmlFor={label}>{label}</label>
          <p className='text-xs text-gray-600 leading-relaxed'>{description}</p>
        </div>
        <select className='border p-3 text-sm focus:outline-none active:outline-none' onChange={(e)=>setAttribute(e.target.value)} name={label}>
          {
            options.map(option => {
              return(
                <option key={option.id}>{option.size}</option>
              )
            })
          }
        </select>
    </div>
  )
}
