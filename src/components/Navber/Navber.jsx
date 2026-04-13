import React from 'react'
import navimg  from '../../../public/assets/logo.png'
import { IoHome } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { FaChartLine } from "react-icons/fa6";


export const Navber = () => {
  return (
    <>
    <div className='border-b border-gray-300 shadow py-3'>
        <div className='flex justify-between container mx-auto' >
            <img src={navimg}></img>
            <div className='flex gap-4'>
                <button className=' flex text-white items-center gap-1 bg-[#244D3F] p-2.5'><IoHome />Home</button>
                <button className=' flex text-white items-center gap-1 bg-[#244D3F] p-2.5' ><IoMdTime />Timeline</button>
                <button className=' flex text-white items-center gap-1 bg-[#244D3F] p-2.5'><FaChartLine />Stats</button>
            </div>
        </div>
    </div>
    
    </>
  )
}
