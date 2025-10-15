import AboutUS from '@/components/AboutUS'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ServiceFeatures from '@/components/ServiceFeatures'
import StatsSection from '@/components/StatsSection'
import TeamSlider from '@/components/TeamSlider'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <AboutUS />
        <StatsSection />
        <TeamSlider />
        <ServiceFeatures />
        <Footer />
    </div>
  )
}

export default page