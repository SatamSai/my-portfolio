import styled from 'styled-components';

export const JourneyItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media only screen and (max-width: 600px){
        gap: 13px;
    }
    @media only screen and (max-width: 450px){
        gap: 11.5px;
    }
    @media only screen and (max-width: 400px){
        gap: 10px;
    }
`;

export const JourneyItem = styled.div`
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    border-radius: 15px;
    overflow: hidden;
    transition: height 0.3s ease;
    cursor: pointer;
    @media only screen and (max-width: 600px){
        border-radius: 13px;
    }
    @media only screen and (max-width: 450px){
        border-radius: 10px;
    }
    @media only screen and (max-width: 400px){
        border-radius: 8px;
    }
`;

export const JourneyContent = styled.div`
`;

export const JourneyHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    @media only screen and (max-width: 600px){
        padding: 18px;
    }
    @media only screen and (max-width: 450px){
        padding: 16px;
    }
    @media only screen and (max-width: 400px){
        padding: 14.5px;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`

export const Logo = styled.img`
    height: 55px;
    width: 55px;
    border-radius: 5px;
    background-color: white;
    padding: 3px;
    @media only screen and (max-width: 600px){
      height: 48px;
      width: 48px;
    }
    @media only screen and (max-width: 450px){
      height: 43px;
      width: 43px;
      border-radius: 3px;
    }
    @media only screen and (max-width: 400px){
      height: 38px;
      width: 38px;
    }
`;

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;


export const Title = styled.h3`
    font-size: 19px;
    display: flex;
    align-items: center;
    gap: 10px;
    @media only screen and (max-width: 600px){
        font-size: 17px;
    }
    @media only screen and (max-width: 450px){
        font-size: 15px;
    }
    @media only screen and (max-width: 400px){
        font-size: 13.5px;
    }
`;

export const Type = styled.div`
`;

export const TypeIcon = styled.img`
`;

export const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${({ expanded }) => (expanded ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease;
`;
export const SubTitle = styled.h4`
    font-size: 13px;
    @media only screen and (max-width: 600px){
        font-size: 11.5px;
    }
    @media only screen and (max-width: 450px){
        font-size: 10px;
    }
    @media only screen and (max-width: 400px){
        font-size: 9px;
    }
`;

export const JourneyBody = styled.div`
    max-height: ${({ expanded }) => (expanded ? '500px' : '0px')};
    margin-top: ${({ expanded }) => (expanded ? '10px' : '0px')};
    transition: all 0.5s ease-in;
`;

export const Description = styled.ul`
    padding: 20px 30px;
    font-size: 14px;
    box-sizing: border-box;
    overflow: auto;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border-radius: 15px;
    @media only screen and (max-width: 600px){
        font-size: 12px;
    }
    @media only screen and (max-width: 450px){
        padding: 15px 20px;
        font-size: 10.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 9.5px;
    }
`