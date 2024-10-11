import React, { useState } from 'react'
import SectionTemplate from '../SectionTemplate'
import { ProjectInfoContainer, ProjectHeading, ProjectLogo, ProjectTitle, Title, Time, ProjectPictures, Heading, Slider, SliderImage, Text, LiveLink } from './ProjectDetailSection.styles';
import { projects } from '../../data';
import { useParams } from 'react-router-dom';
import ConnectSection from '../ConnectSection';
import SocialSection from '../SocialSection';
import Footer from '../Footer';
import { PortfolioCardContainer, PortfolioCardWrapper } from '../styles';
import { GitHub, OpenInNew } from '@mui/icons-material';

const ProjectDetailSection = () => {

    const params = useParams()

    const [projectDetails] = useState(projects[params.id]);

    return (
        <PortfolioCardWrapper>
            <PortfolioCardContainer>
                <SectionTemplate title={"Project"}>
                    <ProjectInfoContainer>
                        <ProjectHeading>
                            <ProjectLogo src={projectDetails.logoUrl} />
                            <ProjectTitle>
                                <Title>{projectDetails.title}</Title>
                                <Time>{projectDetails.time}</Time>
                            </ProjectTitle>
                            <LiveLink>
                                <a href={projectDetails.githubUrl} target='blank'>
                                    <GitHub />
                                </a>
                                <a href={projectDetails.websiteUrl} target='blank'>
                                    <OpenInNew />
                                </a>
                            </LiveLink>
                        </ProjectHeading>

                        <ProjectPictures>
                            <Heading>Pictures</Heading>
                            <Slider>
                                {projectDetails.pictures.map((picture, index) => (
                                    <SliderImage key={index} src={picture} draggable={false} />
                                ))}
                            </Slider>
                        </ProjectPictures>

                        <ProjectDetailItem heading="About" text={projectDetails.about} />
                        <ProjectDetailItem heading="TechStack" text={projectDetails.techStack} />
                        <ProjectDetailItem heading="Technical Implementation" text={projectDetails.implementation} />
                    </ProjectInfoContainer>
                </SectionTemplate>
                <ConnectSection />
                <SocialSection />
                <Footer />
            </PortfolioCardContainer>
        </PortfolioCardWrapper>
    )
}

const ProjectDetailItem = ({ heading, text }) => (
    <div>
        <Heading>{heading}</Heading>
        <Text>
            {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </Text>
    </div>
);

export default ProjectDetailSection;
