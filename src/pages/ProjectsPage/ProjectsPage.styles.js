import styled from "styled-components";


export const Heading = styled.div`
    font-size: 35px;
    margin: 15px 0px;
    font-weight: bold;
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

export const Text = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
    @media only screen and (max-width: 600px){
        font-size: 14.5px;
    }
    @media only screen and (max-width: 450px){
        font-size: 13px;
        margin-bottom: 15px;
    }
    @media only screen and (max-width: 400px){
        font-size: 11.5px;
    }
`