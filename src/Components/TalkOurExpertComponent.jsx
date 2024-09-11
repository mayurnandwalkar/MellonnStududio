import React from 'react'
import SatymImage from '../assets/Images/satymimage.png'
const TalkOurExpertComponent = () => {
    return (
        <section className='talk-to-our-expert-section' data-aos="zoom-in-up">
            <div className='container talk-expert-section py-5'>
                <div className='display-contain-talk-expert pt-5 pb-5'  >
                    <div>
                        <img src={SatymImage} className='img-fluid' />
                    </div>
                    <div>
                        <h2>Talk to our expert</h2>
                        <p className='mb-4'>Get to know how we can be helpful to turn your<br className="d-none d-md-block" /> idea into a reality.</p>
                        <button class="hire-us-now-white-background btn-outline text-uppercase" type="submit">Lets Talk</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TalkOurExpertComponent