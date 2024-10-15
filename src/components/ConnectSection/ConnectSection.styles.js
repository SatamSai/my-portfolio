import styled from "styled-components";


export const ConnectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 80px 0px;
    @media only screen and (max-width: 600px){
        gap: 16.5px;
        margin: 65px 0px;
    }
    @media only screen and (max-width: 450px){
        gap: 15px;
        margin: 55px 0px;
    }
    @media only screen and (max-width: 400px){
        gap: 13px;
        margin: 45px 0px;
    }
`

export const Text = styled.h1`
    font-size: 22px;
    text-align: center;
    @media only screen and (max-width: 600px){
        font-size: 20px;
    }
    @media only screen and (max-width: 450px){
        font-size: 18.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 17px;
    }
`

export const Actions = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
    @media only screen and (max-width: 450px){
        gap: 20px;
    }
`

export const Button = styled.div`
    height: 40px;
    width: 100px;
    font-size: 13px;
    background-color:  ${({ theme }) => theme.colors.tertiaryBg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.colors.primaryBg};
    }
    @media only screen and (max-width: 600px){
        font-size: 11.5px;
        height: 35px;
        width: 88px;
    }
    @media only screen and (max-width: 450px){
        font-size: 10.5px;
        height: 30px;
        width: 75px;
    }
    @media only screen and (max-width: 400px){
        font-size: 9px;
        height: 27px;
        width: 68px;
    }
`
export const Link = styled.a`
    height: 40px;
    width: 100px;
    font-size: 13px;
    background-color:  ${({ theme }) => theme.colors.tertiaryBg};
    color: ${({ theme }) => theme.colors.primaryText} ;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.colors.primaryBg};
    }
    @media only screen and (max-width: 600px){
        font-size: 11.5px;
        height: 35px;
        width: 88px;
    }
    @media only screen and (max-width: 450px){
        font-size: 10.5px;
        height: 30px;
        width: 75px;
    }
    @media only screen and (max-width: 400px){
        font-size: 9px;
        height: 27px;
        width: 68px;
    }
`