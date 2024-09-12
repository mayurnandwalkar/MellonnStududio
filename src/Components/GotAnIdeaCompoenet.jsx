import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

const GotAnIdeaCompoenet = () => {
    const navigate = useNavigate();
    const handleContactUs = (e) => {
        e.preventDefault();
        navigate("/contact-us")
    }
    return (
        <>
            <section className='section-got-an-idea py-5 pt-5' data-aos="zoom-in-up" >
                <div className='container'>
                    <div className='text-center pt-4'>
                        <p>Got An Idea?</p>
                        <h1>Let’s make it happen!</h1>
                    </div>
                    <div className='display-buttons text-center mt-5 pb-5'>
                        <div>
                            <button type="button" className='cst-get-in-tout-btn btn-outline text-uppercase' onClick={handleContactUs}>Get in touch</button>
                        </div>
                        <div>
                        <button className='btn cst-talk-on-wh-btn btn-outline text-uppercase' onClick={()=>window.open('https://wa.me/918882024581', '_blank')}>
                                <FaWhatsapp style={{ fontSize: "18px" }} /> TALK TO US ON WHATSAPP
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GotAnIdeaCompoenet