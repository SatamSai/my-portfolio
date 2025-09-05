import styled from "styled-components"


export const ContactFormWrapper = styled.div``

export const ContactFormHeading = styled.h1`
    margin-top: 10px;
    font-size: 30px;
    @media only screen and (max-width: 600px){
        font-size: 28px;
    }
    @media only screen and (max-width: 450px){
        font-size: 24px;
    }
    @media only screen and (max-width: 400px){
        font-size: 20px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    gap: 10px;
    margin: 30px 0px;
`

export const Input = styled.input`
    width:48.5%;
    height: 45px;
    border-radius: 5px;
    border: 0px;
    padding: 10px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.tertiaryBg};
    color: ${({ theme }) => theme.colors.primaryText};
    &:focus{
        outline: none;
    }
    @media only screen and (max-width: 600px){
        height: 45px;
        font-size: 14px;
    }
    @media only screen and (max-width: 450px){
        font-size: 12.5px;
    }
    @media only screen and (max-width: 400px){
        height: 35px;
        font-size: 11px;
    }
`

export const TextArea = styled.textarea`
    height: 150px;
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    font-size: 15px;
    border: 0px;
    resize: none;
    background-color: ${({ theme }) => theme.colors.tertiaryBg};
    color: ${({ theme }) => theme.colors.primaryText};
    &:focus{
        outline: none;
    }
    @media only screen and (max-width: 600px){
        font-size: 14px;
    }
    @media only screen and (max-width: 450px){
        font-size: 12.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 11px;
    }
`

export const SubmitButton = styled.div`
    width: 100%;
    height: 40px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 0px;
    color: ${({ theme }) => theme.colors.primaryText};
    cursor: pointer;
    @media only screen and (max-width: 600px){
        font-size: 14px;
    }
    @media only screen and (max-width: 450px){
        height: 35px;
        font-size: 12.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 11px;
    }
`
