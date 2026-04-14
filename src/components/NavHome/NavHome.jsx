import React from 'react'
import { HeroSection } from '../HeroSection/HeroSection'
import { FourCard } from '../FourCard/FourCard'
import { AllProfile } from '../AllProfile/AllProfile'
export const NavHome = () => {
  return (
    <div>
        <HeroSection/>
        <FourCard/>
        <AllProfile/>
    </div>
  )
}
