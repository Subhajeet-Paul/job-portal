import React from 'react'
import Navbar from "./shared/navbar.jsx"
import HeroSection from './HeroSection.jsx'
import CategoryCarousel from './CategoryCarousel.jsx'
import LatestJobs from './LatestJobs.jsx'
const home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategoryCarousel/>
    <LatestJobs/>
    {/* <Footer/> */}
    </>
  )
}

export default home