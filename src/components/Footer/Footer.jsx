import React from 'react'
import FooterImg from '../../../public/assets/logo-xl.png'
import FbImg from '../../../public/assets/facebook.png'
import InsImg from '../../../public/assets/instagram.png'
import twImg from '../../../public/assets/twitter.png'

export const Footer = () => {
  return (
    <>
      <div className='bg-[#244D3F]'>
        <img src={FooterImg} />
        <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <div>
          <h1>Social Links</h1>
          <div>
          <img src={FbImg}  />
          <img src={InsImg} />
          <img src={twImg}  />
          </div>
        </div>
        <div>
          <h1>© 2026 KeenKeeper. All rights reserved.</h1>
          <div>
            <h3>Privacy Policy</h3>
            <h3>Terms of Service</h3>
            <h3>Cookies</h3>
          </div>
        </div>
      </div>
    </>
  )
}
