import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import GotAnIdeaCompoenet from '../Components/GotAnIdeaCompoenet'
import FaqSectionComponet from '../Components/FaqSectionComponet'
import ClientsLogosComponent from '../Components/ClientsLogosComponent'
import HeroComponentAboutPage from '../Components/HeroComponentAboutPage'
import ClientsValuesCompoenent from '../Components/ClientsValuesCompoenent'
import LeadersComponent from '../Components/LeadersComponent'

const AboutPage = () => {
    return (
        <>
            <Header />
            <HeroComponentAboutPage />
            <ClientsValuesCompoenent />
            <ClientsLogosComponent />
            <section className='our-value-section py-5' data-aos="zoom-in-up">
                <div className='container'>
                    <div className='text-center pt-5 pb-5'>
                        <h1>Client Testimonials</h1>
                        <p className='col-sm-8 col-12 mx-auto'>We’re a people-focused UX/UI design agency dedicated to making the world a better place. Our core values revolve around the amazing people we work with, who inspire and drive us every day.</p>
                    </div>
                    <div className="grid-container pb-5">
                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Melonn Design Studio created a powerful, cohesive brand identity that perfectly reflects our vision. Their creativity and attention to detail were outstanding.</h5>
                                <span>Avirup Mondal</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Their UI/UX redesign increased our app’s user engagement by 35%. Melonn Design Studio understands user needs and delivers innovative, user-friendly designs.</h5>
                                <span>Pushkal Kumara</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Great collaboration from start to finish! Melonn Design Studio delivered exceptional designs that aligned perfectly with our goals. Highly recommend their professional approach.
                                </h5>
                                <span>Priya Shah</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Melonn Design Studio turned our complex product idea into reality. Their innovative design approach and understanding of our requirements were exceptional.
                                </h5>
                                <span>David Mitchell</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <LeadersComponent />
            <FaqSectionComponet />
            <GotAnIdeaCompoenet />
            <Footer />
        </>
    )
}

export default AboutPage