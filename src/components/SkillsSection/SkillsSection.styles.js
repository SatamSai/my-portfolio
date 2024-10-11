import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const SkillsContainer = styled.div`
  color: ${({ theme }) => theme.colors.primaryText};;
`;

export const Category = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: ${({ expanded }) => (expanded ? 'auto' : '60px')};
  background-color: ${({ theme }) => theme.colors.transparentBg};
  transition: all 0.3s ease-in-out;
  margin-bottom: 10px;
`;

export const Header = styled.h3`
  position: absolute;
  font-size: ${({ expanded }) => (expanded ? '40px' : '16px')};
  color: ${({ theme, expanded }) => (expanded ? theme.colors.lightText : theme.colors.primaryText)};
  display: flex;
  align-items: center;
  justify-content: ${({ expanded }) => (expanded ? 'center' : 'left')};
  margin-left: ${({ expanded }) => (expanded ? '0px' : '20px')};
  height: 100%;
  width: 100%;
  transition: all 0.3s ease;
  text-transform: uppercase;
`;

export const HeaderText = styled.div`
`

export const CategoryContent = styled.div`
    padding: 10px;
    font-size: 20px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: ${({ expanded }) => (expanded ? 'none' : 'flex')};
    align-items: center;
    justify-content: end;
    z-index: 10;
`;

export const SkillList = styled.div`
  display: ${({ expanded }) => (expanded ? 'flex' : 'none')};
    padding: ${({ expanded }) => (expanded ? '20px' : '0px')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SkillItem = styled.div`
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.transparentGreen};
  padding: 4px 8px;
  margin: 5px;
  border-radius: 4px;
`;
