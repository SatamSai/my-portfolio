import Hero from '../../components/Hero'
import SkillSection from '../../components/SkillsSection'
import JourneySection from '../../components/JourneySection'
import ProjectSection from '../../components/ProjectSection'
import { PortfolioCardContainer, PortfolioCardWrapper } from '../../components/styles'
import ConnectSection from '../../components/ConnectSection'
import SocialSection from '../../components/SocialSection'
import Footer from '../../components/Footer'
import LeetCodeSection from '../../components/LeetCodeSection'

const HomePage = () => {
    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <Hero />
                <LeetCodeSection/>
                <SkillSection />
                <ProjectSection />
                <JourneySection />
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

export default HomePage