import React from 'react'
import SatyamImage from '../assets/Images/Component20.png'
import GangeshImage from '../assets/Images/Component21.png'
const LeadersComponent = () => {
  return (
    <>
      <section className='leaders-section mb-5'>
        <div className='container'>
          <div className='text-center'>
            <h1>say hello to the<br />leaders of our tribe!</h1>
            <p className='mt-4'>Our guiding pillars who support us in everything we do.</p>
          </div>
          <div className='display-founder-images mt-5'>
            <div><img src={SatyamImage} className='img-fluid' /></div>
            <div><img src={GangeshImage} className='img-fluid' /></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadersComponent