import React, { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout/MainLayout'
import { NavHome } from '../NavHome/NavHome'
import { AllProfile } from '../AllProfile/AllProfile'
import { ProfileDetails } from '../ProfileDetails/ProfileDetails'
import { Timeline } from '../Timeline/Timeline'
import { Stats } from '../Stats/Stats'
import { ErrorPage } from '../ErrorPage/ErrorPage'

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
    },
    {
    path:'/timeline',
    element:<Timeline/> ,
    }
    ,
    {
    path:'/stats',
    element:<Stats/> ,
    },
    {
    path: '*',
    element: <ErrorPage/>
   }
     ]
    }
   
])