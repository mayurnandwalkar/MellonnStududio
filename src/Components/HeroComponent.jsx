import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const HeroComponent = () => {
    const navigate = useNavigate();
    const handleContactUs = (e) => {
        e.preventDefault();
        navigate("/contact-us")
    }
    return (
        <>

            <section className='landing-page-hero-sec d-flex align-items-center justify-content-center' data-aos="zoom-in-up"  >
                <div className='container'>
                    <div className='hero-land text-center'>
                        <h1 className='mx-auto col-sm-8 col-12'>Transform your vision into amazing digital experiences with us.</h1>
                        <p className='mx-auto col-sm-8 col-12 mt-4'>Ditch the clunky enterprise software and step into a world of effortless user experiences. From design and UX to product innovation, we’re here to guide you from idea to impact.</p>
                        <div className='display-buttons mt-5'>
                            <div>
                                <button className='cst-get-in-tout-btn btn-outline text-uppercase' onClick={handleContactUs}>Get in touch</button>
                            </div>
                            <div>
                                <button className='btn cst-talk-on-wh-btn btn-outline text-uppercase' onClick={() => window.open('https://wa.me/918882024581', '_blank')}>
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