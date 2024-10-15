import React from 'react'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../../components/styles'
import SocialSection from '../../components/SocialSection'
import Footer from '../../components/Footer'
import AboutSection from '../../components/AboutSection'
import ArtWorksSection from '../../components/ArtworksSection'
import ConnectSection from '../../components/ConnectSection'

const AboutPage = () => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <AboutSection />
                <ArtWorksSection />
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default AboutPage