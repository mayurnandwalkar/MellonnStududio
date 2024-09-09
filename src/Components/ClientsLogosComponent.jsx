import React from 'react'
import RecImage from '../assets/Images/Framelogs.png'
import MobileRecImage from '../assets/Images/logoesForMobile.png'

const ClientsLogosComponent = () => {
  return (
    <section className="mt-5 mb-5 text-center companies-logo-section">
      <br />
      <div className='container'>
        <h1>Clients who trust us</h1>
        <p className='mb-4 mt-2'>We’ve worked with renowned brands, start-ups, NGOs, investors & advisors.</p>
        <div className='text-center desktop-image'>
          <img src={RecImage} className='img-fluid' alt='desktop-image' />
        </div>
        <div className='mobilelogo-image'>
          <img src={MobileRecImage} className='img-fluid' alt='mobilelogo-image' />
        </div>
      </div>
    </section>
  )
}

export default ClientsLogosComponent