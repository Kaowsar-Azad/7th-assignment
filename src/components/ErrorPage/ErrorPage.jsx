import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-[80px] font-bold text-[#244D3F]'>404</h1>
      <p className='text-[24px] text-gray-500 mb-6'>Page not found</p>
      <Link to="/">
        <button className='bg-[#244D3F] text-white px-6 py-3 rounded'>
          Go Home
        </button>
      </Link>
    </div>
  )
}