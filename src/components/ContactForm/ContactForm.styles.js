import styled from "styled-components"


export const ContactFormWrapper = styled.div``

export const ContactFormHeading = styled.h1`
    margin-top: 10px;
    font-size: 30px;
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
`

export const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    font-size: 15px;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 0px;
    color: ${({ theme }) => theme.colors.primaryText};
    cursor: pointer;
`
