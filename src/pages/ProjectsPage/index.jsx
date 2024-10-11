import React from 'react'
import ProjectSection from '../../components/ProjectSection'
import { Heading, Text } from './ProjectsPage.styles'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../../components/styles'
import SocialSection from '../../components/SocialSection'
import Footer from '../../components/Footer'
import ConnectSection from '../../components/ConnectSection'

const ProjectsPage = () => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <Heading>My Personal Projects</Heading>
                <Text>Explore my portfolio, where innovative solutions intersect with thoughtful development. Each project reflects my passion for creating seamless user experiences and functional designs that empower and engage users.</Text>
                <ProjectSection />
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default ProjectsPage