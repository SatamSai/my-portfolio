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
`;

export const SectionContent = styled.div`
  font-size: 16px;
  line-height: 1.5;
`;
