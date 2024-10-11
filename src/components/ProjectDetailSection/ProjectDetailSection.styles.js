import styled from 'styled-components';

export const ProjectInfoContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const ProjectHeading = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const ProjectLogo = styled.img`
    height: 65px;
`;

export const ProjectTitle = styled.div``;

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
`

export const Title = styled.h2``;

export const Time = styled.p``;

export const ProjectPictures = styled.div``;

export const Heading = styled.div`
font-size: 18px;
font-weight: bold;
font-style:italic;
margin-bottom: 10px;
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
`;
