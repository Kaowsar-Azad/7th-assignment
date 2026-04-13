import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { NavHome } from '../NavHome/NavHome'

export const router = createBrowserRouter ([
     {
    path:'/',
    element:<MainLayout/> ,
     children : [
         {
    path:'/',
    element:<NavHome/> ,
     
    }
     ]
    }
   
])