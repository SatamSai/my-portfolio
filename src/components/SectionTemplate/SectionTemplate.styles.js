import styled from 'styled-components';

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tertiaryBg};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media only screen and (max-width: 600px){
    padding: 16px;
    gap: 15px;
  }
  @media only screen and (max-width: 450px){
    padding: 14px;
    gap: 12px;
  }
  @media only screen and (max-width: 400px){
    padding: 12.5px;
    gap: 10px;
  }
`;

export const SectionHeading = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 19px;
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primaryText};
  @media only screen and (max-width: 600px){
    font-size: 17px;
    margin-top: 12px;
    margin-bottom: 8.5px;
  }
  @media only screen and (max-width: 450px){
    font-size: 15.5px;
    margin-top: 10px;
    margin-bottom: 7.5px;
  }
  @media only screen and (max-width: 400px){
    font-size: 13px;
    margin-top: 8.5px;
    margin-bottom: 6.5px;
  }
`;

export const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
  @media only screen and (max-width: 600px){
    font-size: 14.5px;
  }
  @media only screen and (max-width: 450px){
    font-size: 13px;
  }
  @media only screen and (max-width: 400px){
    font-size: 12px;
  }
`;
