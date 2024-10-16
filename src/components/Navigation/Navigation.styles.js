import styled from "styled-components"


export const NavigationWrapper = styled.div`
    position: sticky;
    top: 20px;
    height: 65px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 100;
    @media only screen and (max-width: 600px){
        height: 60px;
    }
    @media only screen and (max-width: 450px){
        top: 15px;
        height: 55px;
    }
    @media only screen and (max-width: 400px){
        top: 10px;
        height: 50px;
    }
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
    @media only screen and (max-width: 600px){
        border-radius: 16px;
        padding: 0px 10px;
    }
    @media only screen and (max-width: 450px){
        border-radius: 12px;
        padding: 0px 10px;
    }
    @media only screen and (max-width: 400px){
        border-radius: 8px;
        padding: 0px 4px;
        height: 100%;
    }
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
    transform-origin:left;

    &.selected{
        background-color: ${({ theme }) => theme.colors.transparentGreen};
    }
    &:hover{
        background-color: ${({ theme }) => theme.colors.transparentGreen};
    }

    @media only screen and (max-width: 600px){
        margin: 0px 6px;
        font-size: 17px;
        scale: 0.9;
    }
    @media only screen and (max-width: 450px){
        margin: 0px 5px;
        scale: 0.85;
    }
    @media only screen and (max-width: 400px){
        margin: 0px 4px;
        scale: 0.8;
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