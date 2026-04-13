import React from 'react'
import { FaPlus } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <div className='flex flex-col items-center space-y-5 text-center mt-9 px-4'>
  <h1 className='font-bold text-[#1F2937] text-[28px] sm:text-[36px] md:text-[48px]'>Friends to keep close in your life</h1>
  <p className='font-semibold text-[#64748B] text-[14px] sm:text-[16px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the<br className='hidden sm:block'/>
relationships that matter most.</p>
  <button className='flex text-white items-center gap-1 bg-[#244D3F] p-2.5'><FaPlus />
Add a Friend</button>
</div>
  )
}
