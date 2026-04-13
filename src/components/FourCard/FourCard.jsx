import React from 'react'

export const FourCard = () => {
  return (
   <div className='grid grid-cols-2 md:grid-cols-4 gap-4 container mx-auto mt-9 px-4'>
  <div className='w-full h-[137px] shadow flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[#244D3F text-[32px]'>10</h1>
    <p className='text-[#64748B] text-[18px]'>Total Friends</p>
  </div>
  <div className='w-full h-[137px] shadow flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[#244D3F text-[32px]'>3</h1>
    <p className='text-[#64748B] text-[18px]'>On Track</p>
  </div>
  <div className='w-full h-[137px] shadow flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[#244D3F text-[32px]'>6</h1>
    <p className='text-[#64748B] text-[18px]'>Need Attention</p>
  </div>
  <div className='w-full h-[137px] shadow flex flex-col items-center justify-center'>
    <h1 className='font-bold text-[#244D3F text-[32px]'>12</h1>
    <p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
  </div>
</div>
  )
}
