import React from 'react'
import SectionTemplate from '../SectionTemplate';
import { SocialLink, Socials } from './SocialSection.styles';
import { GitHub, Instagram, LinkedIn, X } from '@mui/icons-material';

const SocialSection = () => {
    return (
        <SectionTemplate title="Socials">
            <Socials>
                <SocialLink href='https://www.instagram.com/sainam_satam/' target='blank'>
                    <Instagram />
                </SocialLink>
                <SocialLink href='https://www.linkedin.com/in/sainam-satam-9722671b6/' target='blank'>
                    <LinkedIn />
                </SocialLink>
                <SocialLink href='https://github.com/SatamSai' target='blank'>
                    <GitHub />
                </SocialLink>
                {/* <SocialLink>
                    <X />
                </SocialLink> */}
            </Socials>
        </SectionTemplate>
    )
}

export default SocialSection