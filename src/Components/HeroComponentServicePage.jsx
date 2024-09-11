import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const HeroComponentServicePage = () => {
    const navigate = useNavigate();
    const handleContactUs = (e) => {
        e.preventDefault();
        navigate("/contact-us")
    }
    return (
        <section className='service-page-hero-sec d-flex align-items-center justify-content-center' data-aos="zoom-in-up" >
            <div className='container'>
                <div className='hero-land text-center'>
                    <h1 className='mx-auto col-sm-8 col-12'>Discover insights through <strong>research.</strong><br />
                        <strong>Design</strong> with users in mind.<br />
                        <strong>Build</strong> solutions that grow with you.
                    </h1>

                    <p className='mx-auto col-sm-8 col-12'>We excel at blending design and business with our UI/UX services, creating beautiful and functional experiences that get launched fast.</p>

                    <div className='display-buttons text-center mt-5'>
                        <div>
                            <button className='cst-get-in-tout-btn btn-outline text-uppercase' onClick={handleContactUs}>Get in touch</button>
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

    )
}

export default HeroComponentServicePage