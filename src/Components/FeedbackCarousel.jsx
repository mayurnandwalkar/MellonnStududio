import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeedbackCarousel = () => {
    const navigate = useNavigate();
    const cstArray = [
        {
            feedback: "Melonn Design Studio created a powerful, cohesive brand identity that perfectly reflects our vision. Their creativity and attention to detail were outstanding.",
            name: "Avirup Mondal",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Their UI/UX redesign increased our app’s user engagement by 35%. Melonn Design Studio understands user needs and delivers innovative, user-friendly designs.",
            name: "Pushkal Kumara",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Great collaboration from start to finish! Melonn Design Studio delivered exceptional designs that aligned perfectly with our goals. Highly recommend their professional approach.",
            name: "Priya Shah",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
        {
            feedback: "Melonn Design Studio turned our complex product idea into reality. Their innovative design approach and understanding of our requirements were exceptional.",
            name: "David Mitchell",
            position: "Owner, Phonehub(Balaji Enterprises)"
        },
    ];
    const handleContactUs = (e) => {
        e.preventDefault();
        navigate("/contact-us")
    }
    return (
        <section className='digital-product-sections mt-5 mb-5' data-aos="zoom-in-up" >
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
                                    {/* <span>{item.position}</span> */}
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
                                    {/* <span>{item.position}</span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='display-buttons text-center mt-5'>
                    <div>
                        <button className='cst-get-in-tout-btn btn-outline text-uppercase' onClick={handleContactUs}>Get in touch</button>
                    </div>
                    <div>
                        <button className='btn cst-talk-on-wh-btn btn-outline text-uppercase'>
                            <FaWhatsapp style={{ fontSize: "18px" }}/> TALK TO US ON WHATSAPP
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default FeedbackCarousel;
