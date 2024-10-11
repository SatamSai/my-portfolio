import styled from "styled-components"


export const FooterContainer = styled.div`
    background-color:  ${({ theme }) => theme.colors.tertiaryBg};
    padding: 40px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap:10px;
`

export const Copyright = styled.div`
`

export const Disclaimer = styled.div`
    font-size:14px;
`