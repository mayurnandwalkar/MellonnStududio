import React from 'react'
import SatyamImage from '../assets/Images/satyamImage.png'
import GangeshImage from '../assets/Images/gangeshImage.png'
import { FaLinkedin } from "react-icons/fa";

const LeadersComponent = () => {
  return (
    <>
      <section className='leaders-section mb-5' data-aos="zoom-in-up">
        <div className='container'>
          <div className='text-center'>
            <h1>say hello to the<br />leaders of our tribe!</h1>
            <p className='mt-4'>Our guiding pillars who support us in everything we do.</p>
          </div>
          <div className='display-founder-images mt-5'>
            <div className='text-center'>
              <img src={SatyamImage} className='img-fluid' />
              <h4 className='mt-2'>satyam tiwari</h4>
              <a href="https://www.linkedin.com/in/satyam-tiwari-965598153/" target="_blank" className="visit-linkedin"><FaLinkedin /> Visit LinkedIn</a>
              <span>founder & ceo</span>
            </div>
            <div className='text-center'>
              <img src={GangeshImage} className='img-fluid' />
              <h4 className='mt-2'>gangesh pathak</h4>
              <span>Mentor to founder</span>
              <a href="https://www.linkedin.com/in/gkp/" target="_blank" className="visit-linkedin"><FaLinkedin /> Visit LinkedIn</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LeadersComponent