import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { NavHome } from '../NavHome/NavHome'
import { AllProfile } from '../AllProfile/AllProfile'
import { ProfileDetails } from '../ProfileDetails/ProfileDetails'

export const router = createBrowserRouter ([
     {
    path:'/',
    element:<MainLayout/> ,
     children : [
   {
    path:'/',
    element:<NavHome/> ,
     
    },
    {
    path:'/profiles',
    element:(<Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
     <AllProfile/>
    </Suspense>)
    },
    {
    path:'/profile/:id',
    element:<ProfileDetails/> ,
    }
     ]
    }
   
])