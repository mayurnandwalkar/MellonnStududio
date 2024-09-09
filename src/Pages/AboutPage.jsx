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
                                <h5>We have built a strong equation with Lollypop and continuously work with them for all our requirements.</h5>
                                <span>Gangesh Pathak <br />Founder & CEO, Owow Talents</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>We have built a strong equation with Lollypop and continuously work with them for all our requirements.</h5>
                                <span>Gangesh Pathak <br />Founder & CEO, Owow Talents</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>We have built a strong equation with Lollypop and continuously work with them for all our requirements.</h5>
                                <span>Gangesh Pathak <br />Founder & CEO, Owow Talents</span>
                            </div>
                        </div>

                        <div className="grid-item">
                            <div className="mb-4">
                                <div className="cst-hight-hr"></div>
                                <h5>We have built a strong equation with Lollypop and continuously work with them for all our requirements.</h5>
                                <span>Gangesh Pathak <br />Founder & CEO, Owow Talents</span>
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