import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import FaqSectionComponet from '../Components/FaqSectionComponet'
import GotAnIdeaCompoenet from '../Components/GotAnIdeaCompoenet'
import ContactUsComponent from '../Components/ContactUsComponent'

const ContactUsPage = () => {
    return (
        <>
            <Header />
            <ContactUsComponent />
            <FaqSectionComponet />
            <GotAnIdeaCompoenet />
            <Footer />
        </>
    )
}

export default ContactUsPage