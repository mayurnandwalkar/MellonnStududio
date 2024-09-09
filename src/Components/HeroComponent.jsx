import React from 'react'
import { FaWhatsapp } from "react-icons/fa";

const HeroComponent = () => {
    return (
        <>

            <section className='landing-page-hero-sec d-flex align-items-center justify-content-center'  >
                <div className='container'>
                    <div className='hero-land text-center'>
                        <h1 className='mx-auto col-8'>Transform your vision into amazing digital experiences with us.</h1>
                        <p className='mx-auto col-8'>Ditch the clunky enterprise software and step into a world of effortless user experiences. From design and UX to product innovation, we’re here to guide you from idea to impact.</p>

                        <div className='display-buttons'>
                            <div>
                                <button className='cst-get-in-tout-btn btn-outline text-uppercase'>Get in touch</button>
                            </div>
                            <div>
                                <button className='btn cst-talk-on-wh-btn btn-outline text-uppercase'>
                                    <FaWhatsapp style={{ fontSize: "18px" }} /> TALK TO US ON WHATSAPP
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HeroComponent