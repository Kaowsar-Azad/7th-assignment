import React from 'react'
import navimg  from '../../../public/assets/logo.png'
import { IoHome } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export const Navber = () => {
  return (
 <>
 <div className='border-b border-gray-300 shadow py-3'>
  <div className='flex flex-col sm:flex-row justify-between items-center container mx-auto px-4 gap-3 sm:gap-0'>
    
    <img src={navimg} className='w-auto h-10 sm:h-auto' />

    <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end'>
      
      <Link to="/">
      <button className='flex text-white items-center justify-center gap-1 bg-[#244D3F] p-2.5 w-full sm:w-auto'>
        <IoHome /> Home
      </button>

      </Link>
      <Link to="timeline">
      <button className='flex text-white items-center justify-center gap-1 bg-[#244D3F] p-2.5 w-full sm:w-auto'>
        <IoMdTime /> Timeline
      </button>
      </Link>

      <button className='flex text-white items-center justify-center gap-1 bg-[#244D3F] p-2.5 w-full sm:w-auto'>
        <FaChartLine /> Stats
      </button>

    </div>
  </div>
</div>
    </>
  )
}
