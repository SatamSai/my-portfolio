import styled from "styled-components"

export const Text = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
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

export const Picture = styled.img`
    width: 100%;
    border: 10px solid ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 15px;
    margin-bottom: 30px;
    @media only screen and (max-width: 450px){
        font-size:20px;
    }
`