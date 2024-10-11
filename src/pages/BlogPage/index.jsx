import React from 'react'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../../components/styles'
import ConnectSection from '../../components/ConnectSection'
import SocialSection from '../../components/SocialSection'
import Footer from '../../components/Footer'

const BlogPage = () => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <h1 style={{ height: '500px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Under Developement</h1>
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default BlogPage