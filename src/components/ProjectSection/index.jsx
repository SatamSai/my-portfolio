import React, { useState } from 'react'
import SectionTemplate from '../SectionTemplate'
import { HeaderContent, Heading, ProjectContent, ProjectHeader, ProjectItem, ProjectItems, Logo, SubTitle, Title, Type, TypeIcon } from './ProjectSection.styles'
import { KeyboardArrowRight } from '@mui/icons-material'
import SurrealImgUrl from '../../assets/surreal.png'

import { projects } from '../../data'
import { useNavigate } from 'react-router-dom'

const ProjectSection = () => {

    const [expanded, setExpanded] = useState("")

    const navigate = useNavigate()


    return (
        <SectionTemplate title={"Projects"}>
            <ProjectItems>
                {
                    projects.map(project => {
                        return (
                            <ProjectItem key={project.id} onClick={() => navigate(`/project/${project.id}`)}>
                                <ProjectContent>
                                    <ProjectHeader onClick={() => setExpanded(!expanded)}>
                                        <HeaderContent>
                                            <Logo src={project.logoUrl} />
                                            <Heading>
                                                <Title>{project.title}</Title>
                                                <SubTitle>{project.time}</SubTitle>
                                            </Heading>
                                        </HeaderContent>
                                        <KeyboardArrowRight style={{ justifySelf: 'end' }} />
                                    </ProjectHeader>
                                </ProjectContent>
                            </ProjectItem>
                        )
                    })
                }
            </ProjectItems>
        </SectionTemplate>
    )
}

export default ProjectSection