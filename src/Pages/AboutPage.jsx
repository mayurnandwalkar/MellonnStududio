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
            <section className='our-value-section py-5'>
                <div className='container'>
                    <div className='text-center pt-5 pb-5'>
                        <h1>Client Testimonials</h1>
                        <p className='col-sm-8 col-12 mx-auto'>We’re a people-focused UX/UI design agency dedicated to making the world a better place. Our core values revolve around the amazing people we work with, who inspire and drive us every day.</p>
                    </div>
                    <div className="grid-container pb-5">
                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Working with Melonn Design Studio was a game-changer for our brand. They crafted a cohesive and memorable brand identity that truly captures our essence. Their attention to detail and creativity exceeded our expectations, and we couldn’t be happier with the results!</h5>
                                <span>Avirup Mondal</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>Melonn Design Studio has an incredible knack for understanding the user. They revamped our app’s UI/UX, leading to a 35% increase in user engagement. Their team is innovative, responsive, and a true partner in the creative process.</h5>
                                <span>Pushkal Kumara</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>From concept to completion, Melonn Design Studio was a pleasure to work with. They were highly communicative and collaborative, ensuring that every design decision aligned with our vision and business goals. Their process was smooth, and the end product was outstanding.</h5>
                                <span>Priya Shah</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>We approached Melonn Design Studio with a complex product idea, and they brought it to life with elegance and precision. Their innovative approach and thorough understanding of our needs made the project a success. Highly recommend for anyone looking to create impactful digital products!</h5>
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