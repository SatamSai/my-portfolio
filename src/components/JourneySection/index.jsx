import React, { useState } from 'react'
import SectionTemplate from '../SectionTemplate'
import { Description, HeaderContent, Heading, IconWrapper, JourneyBody, JourneyContent, JourneyHeader, JourneyItem, JourneyItems, Logo, SubTitle, Title } from './JourneySection.styles'
import { KeyboardArrowDown } from '@mui/icons-material'

import { experiences } from '../../data'


const JourneySection = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <SectionTemplate title={"My Journey"}>
            <JourneyItems>
                {experiences.map((journey) => (
                    <JourneyItem key={journey.id}>
                        <JourneyContent>
                            <JourneyHeader onClick={() => toggleExpand(journey.id)}>
                                <HeaderContent>
                                    <Logo src={journey.logo} loading='lazy'/>
                                    <Heading>
                                        <Title>{journey.title} {journey.icon}</Title>
                                        <SubTitle>{journey.subTitle}</SubTitle>
                                    </Heading>
                                </HeaderContent>
                                <IconWrapper expanded={expanded === journey.id}>
                                    <KeyboardArrowDown style={{ justifySelf: 'end' }} />
                                </IconWrapper>

                            </JourneyHeader>
                            <JourneyBody expanded={expanded === journey.id}>
                                <Description>
                                    {journey.description.map((desc, index) => (
                                        <li key={index}>{desc}</li>
                                    ))}
                                </Description>
                            </JourneyBody>
                        </JourneyContent>
                    </JourneyItem>
                ))}
            </JourneyItems>
        </SectionTemplate>
    );
}

export default JourneySection;
