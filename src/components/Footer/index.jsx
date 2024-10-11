import React from 'react'
import { Copyright, Disclaimer, FooterContainer } from './Footer.styles'

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>
                © Sainam Satam 2024. All rights reserved.
            </Copyright>

            <Disclaimer>
                Portions of this portfolio are based on a template design by Nur Praditya. Custom additions and modifications by Sainam Satam.
            </Disclaimer>
        </FooterContainer>
    )
}

export default Footer