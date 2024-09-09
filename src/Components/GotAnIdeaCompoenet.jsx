import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const GotAnIdeaCompoenet = () => {
    return (
        <>
            <section className='section-got-an-idea py-5 pt-5'>
                <div className='container'>
                    <div className='text-center pt-4'>
                        <p>Got An Idea?</p>
                        <h1>Let’s make it happen!</h1>
                    </div>
                    <div className='display-buttons text-center mt-5 pb-5'>
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
            </section>
        </>
    )
}

export default GotAnIdeaCompoenet