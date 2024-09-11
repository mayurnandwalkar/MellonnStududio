import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const HeroComponentAboutPage = () => {
    const navigate = useNavigate();
    const handleContactUs = (e) => {
        e.preventDefault();
        navigate("/contact-us")
    }
    return (
        <>
            <section className='landing-page-hero-sec d-flex align-items-center justify-content-center' data-aos="zoom-in-up" >
                <div className='container'>
                    <div className='hero-land text-center'>
                        <h1 className='mx-auto col-sm-6 col-12'>We believe in crafting
                            beautiful experiences.</h1>
                        <p className='mx-auto col-sm-4 col-12'>By using ideas, emotions, skills,
                            technology and a whole lot of tea.</p>
                        <div className='display-buttons text-center mt-5'>
                            <div>
                                <button className='cst-get-in-tout-btn btn-outline text-uppercase' onClick={handleContactUs}>Get in touch</button>
                            </div>
                            <div>
                                <button className='btn cst-talk-on-wh-btn btn-outline text-uppercase' onClick={handleContactUs}>
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

export default HeroComponentAboutPage