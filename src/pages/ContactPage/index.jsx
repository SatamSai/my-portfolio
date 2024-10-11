import React from 'react'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../../components/styles'
import ConnectSection from '../../components/ConnectSection'
import SocialSection from '../../components/SocialSection'
import Footer from '../../components/Footer'
import ContactForm from '../../components/ContactForm'

const ContactPage = () => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <ContactForm />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default ContactPage