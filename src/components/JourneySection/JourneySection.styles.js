import styled from 'styled-components';

export const JourneyItems = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const JourneyItem = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 15px;
  overflow: hidden;
  transition: height 0.3s ease;
  cursor: pointer;
`;

export const JourneyContent = styled.div`
`;

export const JourneyHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  padding: 20px;
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
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border-radius: 15px;
`