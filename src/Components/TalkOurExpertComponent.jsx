import React from 'react'
import SatymImage from '../assets/Images/satymimage.png'
const TalkOurExpertComponent = () => {
    return (
        <section className='talk-to-our-expert-section'>
            <div className='container talk-expert-section py-5'>
                <div className='display-contain-talk-expert pt-5 pb-5'  >
                    <div>
                        <img src={SatymImage} className='img-fluid' />
                    </div>
                    <div>
                        <h2>Talk to our expert</h2>
                        <p className='col-sm-9 col-12'>Get to know how we can be helpful to turn your idea into a reality.</p>
                        <button class="cst-get-in-tout-btn btn-outline text-uppercase" type="submit">Lets Talk</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TalkOurExpertComponent