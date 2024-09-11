import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FeedbackCarousel = () => {
    const cstArray = [
        {
            feedback: "Working with Melonn was a refreshing experience due to their focus on aesthetic yet functional UX design. If you need top-tier UX design, I highly recommend Melonn, for their blend of beauty, meaningful interaction, and business value.",
            name: "Pushkal Kumara",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Working with Melonn was a refreshing experience due to their focus on aesthetic yet functional UX design. If you need top-tier UX design, I highly recommend Melonn, for their blend of beauty, meaningful interaction, and business value.",
            name: "Pushkal Kumara",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Working with Melonn was a refreshing experience due to their focus on aesthetic yet functional UX design. If you need top-tier UX design, I highly recommend Melonn, for their blend of beauty, meaningful interaction, and business value.",
            name: "Pushkal Kumara",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Working with Melonn was a refreshing experience due to their focus on aesthetic yet functional UX design. If you need top-tier UX design, I highly recommend Melonn, for their blend of beauty, meaningful interaction, and business value.",
            name: "Pushkal Kumara",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
    ];

    return (
        <section className='digital-product-sections mt-5 mb-5'  data-aos="zoom-in-up" >
            <div className='container-fluid'>
                <h1 className='text-center pt-5'>We craft exceptional digital products</h1>
                <p className='text-center mb-5  '>Our satisfied customers' feedback</p>

                <div className='carousel-wrapper'>
                    <div className='carousel-row left-to-right'>
                        {cstArray.map((item, index) => (
                            <div key={index} className='card-container'>
                                <div className='card cst-card-horizo p-3'>
                                    <h5>{item.feedback}</h5>
                                    <br />
                                    <h5>{item.name}</h5>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='carousel-row right-to-left'>
                        {cstArray.map((item, index) => (
                            <div key={index} className='card-container'>
                                <div className='card cst-card-horizo p-3'>
                                    <h5>{item.feedback}</h5>
                                    <br />
                                    <h5>{item.name}</h5>
                                    <span>{item.position}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='display-buttons text-center mt-5'>
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
    );
};

export default FeedbackCarousel;
