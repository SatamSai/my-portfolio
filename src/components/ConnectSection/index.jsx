import React from 'react'
import { Actions, Button, ConnectContainer, Link, Text } from './ConnectSection.styles'
import { useNavigate } from 'react-router-dom'

const ConnectSection = () => {

    const navigate = useNavigate()
    return (
        <ConnectContainer>
            <Text>Let’s connect and create something great!</Text>
            <Actions>
                <Button onClick={() => navigate("/contact")}>Contact Me</Button>
                <Link href="mailto:sainam7740@gmail.com">Send Mail</Link>
            </Actions>
        </ConnectContainer>
    )
}

export default ConnectSection