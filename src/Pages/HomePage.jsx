import React, { useState } from 'react'
import Header from '../Components/Header'
import HeroComponent from '../Components/HeroComponent'
import FeedbackCarousel from '../Components/FeedbackCarousel'
import Footer from '../Components/Footer'
import GotAnIdeaCompoenet from '../Components/GotAnIdeaCompoenet'
import FaqSectionComponet from '../Components/FaqSectionComponet'
import AboutDesignComponent from '../Components/AboutDesignComponent'
import ClientsLogosComponent from '../Components/ClientsLogosComponent'
import HireUsComponent from '../Components/HireUsComponent'

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroComponent />
      <HireUsComponent />
      <ClientsLogosComponent />
      <AboutDesignComponent />
      <FeedbackCarousel />
      <FaqSectionComponet />
      <GotAnIdeaCompoenet />
      <Footer />
    </>
  )
}

export default HomePage