import React from 'react'
import { Navber } from '../Navber/Navber'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const MainLayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
