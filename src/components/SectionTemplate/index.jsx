import React from 'react'
import { SectionContainer, SectionContent, SectionHeading } from './SectionTemplate.styles'
import { Circle } from '@mui/icons-material'

const SectionTemplate = ({ title, children }) => {
    return (
        <SectionContainer>
            <SectionHeading><Circle style={{ fontSize: '8px', marginRight: '10px' }} />{title}</SectionHeading>
            <SectionContent>{children}</SectionContent>
        </SectionContainer>
    )
}

export default SectionTemplate