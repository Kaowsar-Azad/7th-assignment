import React from 'react'
import FooterImg from '../../../public/assets/logo-xl.png'
import FbImg from '../../../public/assets/facebook.png'
import InsImg from '../../../public/assets/instagram.png'
import twImg from '../../../public/assets/twitter.png'

export const Footer = () => {
  return (
    <>
      <div className='bg-[#244D3F] space-y-4 py-5 px-4'>
        <img src={FooterImg} className='mx-auto'/>
        <p className='text-center text-white text-[16px] sm:text-[18px] mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div>
          <h1 className='text-center text-white text-[18px]'>Social Links</h1>
          <div className='flex gap-5 justify-center mt-3'>
            <img src={FbImg} />
            <img src={InsImg} />
            <img src={twImg} />
          </div>
        </div>
        <div className='border-t border-[#0c5e42] flex flex-col sm:flex-row justify-between container mx-auto mt-9 text-[#aba0a0] text-[16px] sm:text-[18px] px-4 text-center sm:text-left'>
          <h1 className='mt-4 sm:mt-9'>© 2026 KeenKeeper. All rights reserved.</h1>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-9 justify-center sm:justify-end flex-wrap'>
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
            <h3>Cookies</h3>
          </div>
        </div>
      </div>
    </>
  )
}