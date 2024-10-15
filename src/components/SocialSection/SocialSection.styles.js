import styled from "styled-components";


export const Socials = styled.div`
    position: absolute;
    top: 35px;
    right: 0;
    display: flex;
    height: 0px;
    @media only screen and (max-width: 600px){
        top: 28px;
    }
    @media only screen and (max-width: 450px){
        top: 23px;
    }
    @media only screen and (max-width: 400px){
        top: 19px;
    }
`

export const SocialLink = styled.a`
    height: 35px;
    width: 35px;
    background-color: white;
    margin-right: 18px;
    border-radius: 50%;
    font-size:45px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.6s ease;
    &:hover{
        scale: 1.5;
        background-color: black;
        color: #00FF00;
        transform: rotate(360deg);
        transition: all 0.6s ease-in-out;
    }
    @media only screen and (max-width: 450px){
        height: 30px;
        width: 30px;
    }
`
