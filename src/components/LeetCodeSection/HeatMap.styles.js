import styled from "styled-components";

export const HeatMapHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    #year-select-label{
        color: ${({ theme }) => theme.colors.primaryText} !important;
    }

    .MuiSvgIcon-root{
        color: ${({ theme }) => theme.colors.primaryText};
    }

    .MuiInputBase-root{
        color: ${({ theme }) => theme.colors.primaryText};
    }

    .MuiOutlinedInput-notchedOutline{
        border-color : ${({ theme }) => theme.colors.primaryText} !important;
        :hover{
            outline: none;
        }
    }
`

export const YearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 10px;
`;

export const HeatMapWrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow: scroll;
  padding-bottom: 20px;
`

export const HeatMapContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-rows: repeat(7, 1fr);
  grid-auto-flow: column;
`;

export const MonthWrapper = styled.div`
  margin-bottom: 12px;
`;

export const MonthLabel = styled.div`
  margin-left: 20px;
  margin-bottom: 4px;
  font-size: 14px;
  color: #aaa;
  font-weight: bold;
`;

export const HeatMapItem = styled.div`
  position: relative;
  height: 14px;
  width: 14px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.tertiaryBg};
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 2px;
    background-color: rgb(40, 194, 68); /* LeetCode green shade */
    opacity: ${({ "data-opacity": opacity }) => opacity || 0};
    pointer-events: none;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    background: black;
    color: white;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
  }
`;
