import styled from "styled-components"


export const FooterContainer = styled.div`
    background-color:  ${({ theme }) => theme.colors.tertiaryBg};
    padding: 40px 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap:10px;
    @media only screen and (max-width: 600px){
        padding: 35px 17.5px;
    }
    @media only screen and (max-width: 450px){
        padding: 30px 15px;
    }
    @media only screen and (max-width: 400px){
        padding: 25px 12.5px;
    }
`

export const Copyright = styled.div`
    font-size:16px;
    @media only screen and (max-width: 600px){
        font-size:14.5px;
    }
    @media only screen and (max-width: 450px){
        font-size:13px;
    }
    @media only screen and (max-width: 400px){
        font-size:11.5px;
    }
`

export const Disclaimer = styled.div`
    font-size:14px;
    @media only screen and (max-width: 600px){
        font-size:13px;
    }
    @media only screen and (max-width: 450px){
        font-size:12px;
    }
    @media only screen and (max-width: 400px){
        font-size:11px;
    }
`