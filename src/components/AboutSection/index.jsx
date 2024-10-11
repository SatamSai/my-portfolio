import React from 'react'
import SectionTemplate from '../SectionTemplate'
import { Picture, Text } from './AboutSection.styles'
import MyPhoto from '../../assets/myphoto.jpeg'

const AboutSection = () => {
    return (
        <SectionTemplate title={"About Me"}>
            <Text>I’m Sainam Satam, a passionate Frontend Developer based in Mumbai. I specialize in creating clean, responsive, and user-friendly web applications, with a focus on delivering seamless digital experiences. With a strong foundation in React, JavaScript, and modern frontend tools, I enjoy bringing ideas to life through code.</Text>
            <Picture src={MyPhoto} />
            <Text>I hold a Bachelor’s degree in Computer Science from Rajiv Gandhi Institute of Technology, and I’ve had the opportunity to work on a variety of exciting projects, from trading platforms to innovative metaverse solutions. My work combines technical precision with creativity, whether I’m building robust web interfaces or working on complex backend integrations.</Text>
        </SectionTemplate>
    )
}

export default AboutSection