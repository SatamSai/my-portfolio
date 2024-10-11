import styled, { createGlobalStyle, keyframes } from "styled-components";

const animateWrapper = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${({ theme }) => theme.colors.primaryBg};
    transition: all 0.3s ease;
  }
`

export const PortfolioCardWrapper = styled.div`
    margin-top: 35px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    animation: ${animateWrapper} 0.3s ease-in-out forwards;
    color: ${({ theme }) => theme.colors.primaryText};
`

export const PortfolioCardContainer = styled.div`
    width: 95%;
    max-width: 560px;
    background-color: ${({ theme }) => theme.colors.secondaryBg};
    padding: 20px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`