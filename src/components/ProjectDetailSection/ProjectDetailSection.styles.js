import styled from 'styled-components';

export const ProjectInfoContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media only screen and (max-width: 600px){
        border-radius: 13px;
        padding: 13.5px;
        gap: 35px;
    }
    @media only screen and (max-width: 450px){
        border-radius: 10px;
        padding: 12px;
        gap: 30px;
    }
    @media only screen and (max-width: 400px){
        border-radius: 7px;
        padding: 10px;
        gap: 25px;
    }
`;

export const ProjectHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ProjectLogo = styled.img`
    height: 65px;
    transform-origin:left;
    @media only screen and (max-width: 600px){
        scale: 0.9;
    }
    @media only screen and (max-width: 450px){
        scale: 0.85;
    }
    @media only screen and (max-width: 400px){
        scale: 0.8;
    }
`;

export const ProjectTitle = styled.div`
    transform-origin:left;
    @media only screen and (max-width: 600px){
        scale: 0.9;
    }
    @media only screen and (max-width: 450px){
        scale: 0.85;
    }
    @media only screen and (max-width: 400px){
        scale: 0.8;
    }
`;

export const LiveLink = styled.div`
    flex-grow: 1;
    text-align: end;
    margin-right: 10px;
    display: flex;
    justify-content: end;
    gap: 20px;
    a{
        color: ${({ theme }) => theme.colors.primaryText};
    }
    transform-origin:right;
    @media only screen and (max-width: 600px){
        scale: 0.9;
    }
    @media only screen and (max-width: 450px){
        scale: 0.85;
    }
    @media only screen and (max-width: 400px){
        scale: 0.8;
    }
`

export const Title = styled.h2``;

export const Time = styled.p``;

export const ProjectPictures = styled.div``;

export const Heading = styled.div`
font-size: 18px;
font-weight: bold;
font-style:italic;
margin-bottom: 10px;
    @media only screen and (max-width: 600px){
        font-size: 16.5px;
    }
    @media only screen and (max-width: 450px){
        font-size: 15px;
    }
    @media only screen and (max-width: 400px){
        font-size: 13px;
    }
`;

export const Slider = styled.div`
    display: flex;
    gap: 10px;
    width: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
        height: 8px;
    }

    &::-webkit-scrollbar-thumb {
        width: 4px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 4px; 
    }

    &::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.1); 
    }

`;


export const SliderImage = styled.img`
height:175px;
`;

export const ProjectDetailItem = styled.div``;

export const Text = styled.div`
    font-size: 14px;
    @media only screen and (max-width: 600px){
        font-size: 13px;
    }
    @media only screen and (max-width: 450px){
        font-size: 11.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 10px;
    }
`;
