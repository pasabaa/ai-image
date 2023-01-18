import React from 'react'

export const Footer = () => {
  return (
    <div className="mt-auto text-center">
        <p className='text-sm text-gray-400'>© {new Date().getFullYear()}<a className='ml-2' rel='noreferrer noopener' href="https://www.pasabaa.com/">Pablo Sánchez</a></p>
    </div>
  )
}
