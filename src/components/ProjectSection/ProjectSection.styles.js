import styled from 'styled-components';

export const ProjectItems = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
`;

export const ProjectItem = styled.div`
background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    transition: all 0.3s ease;
  }
`;

export const ProjectContent = styled.div`
`;

export const ProjectHeader = styled.div`
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
`;

export const Type = styled.div`
`;

export const TypeIcon = styled.img`
`;

export const SubTitle = styled.h4`
    font-size: 13px;
`;

export const ProjectBody = styled.div`
    max-height: ${({ expanded }) => (expanded ? '500px' : '0px')};
    margin-top: ${({ expanded }) => (expanded ? '10px' : '0px')};
    transition: all 0.5s ease-in;
`;

export const Description = styled.ul`
    padding: 20px 30px;
    font-size: 14px;
    box-sizing: border-box;
    overflow: hidden;
    background-color: #474747;
    border-radius: 15px;
`