import styled from "styled-components"


export const NavigationWrapper = styled.div`
    position: sticky;
    top: 20px;
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 100;
`

export const NavigationContainer = styled.div`
    width: 95%;
    background-color:  ${({ theme }) => theme.colors.secondaryBg};
    height: 100%;
    border-radius: 20px;
    max-width: 560px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
`

export const NavigationItems = styled.div`
    display: flex;
`

export const NavigationItem = styled.div`
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryText};

    &.selected{
        background-color: ${({ theme }) => theme.colors.transparentGreen};
    }
    &:hover{
        background-color: ${({ theme }) => theme.colors.transparentGreen};
    }
`

export const IconGroup = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 80px;
    height: 80px;
    transition: all 0.3s ease-in-out;
    &.dark{
        transform: rotate(-90deg);
        transition: all 0.3s ease-in-out;
    }
`

export const NavigationControls = styled.div`
    display: flex;
`

export const ThemeToggler = styled.div`

`

export const DownloadCV = styled.div``