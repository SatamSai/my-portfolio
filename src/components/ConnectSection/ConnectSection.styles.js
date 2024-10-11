import styled from "styled-components";


export const ConnectContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 80px 0px;
`

export const Text = styled.h1`
    font-size: 22px;
    text-align: center;
`

export const Actions = styled.div`
    display: flex;
    gap: 30px;
    justify-content: center;
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
`