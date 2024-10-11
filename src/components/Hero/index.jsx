import { Circle } from '@mui/icons-material'
import React from 'react'
import { HeroContainer, ProfileStatus, Role, Availablility, Profile, LeftContent, Name, Description, Button, ProfileImg } from './Hero.styles';
import ProfileImgUrl from '../../assets/profile.png'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

    const navigate = useNavigate()
    return (
        <HeroContainer>
            <ProfileStatus>
                <Role> <Circle style={{ fontSize: '8px', marginRight: '10px' }} />Frontend Developer</Role>
                <Availablility>
                    <Circle style={{ fontSize: '6px', marginRight: '10px' }} /> AVAILABLE FOR WORK
                </Availablility>
            </ProfileStatus>

            <Profile>
                <LeftContent>
                    <Name>Hello 👋 <br />
                        I am Sainam Satam </Name>
                    <Description>Frontend Developer specialised in crafting pixel-perfect websites, bringing designs and ideas to life with clean, responsive code. </Description>
                    <Button onClick={() => navigate("/contact")}>Contact Me</Button>
                </LeftContent>
                <ProfileImg src={ProfileImgUrl} />
            </Profile>

        </HeroContainer>
    )
}

export default Hero