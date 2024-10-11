import React from 'react'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../styles'
import ConnectSection from '../ConnectSection'
import SocialSection from '../SocialSection'
import Footer from '../Footer'

const PageContent = ({ children }) => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                {children}
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default PageContent