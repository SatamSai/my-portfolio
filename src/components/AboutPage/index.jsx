import React from 'react'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../styles'
import SocialSection from '../SocialSection'
import Footer from '../Footer'
import AboutSection from '../AboutSection'
import ArtWorksSection from '../ArtworksSection'
import ConnectSection from '../ConnectSection'

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