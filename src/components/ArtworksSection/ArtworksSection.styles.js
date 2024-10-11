import styled from "styled-components"

export const Text = styled.div`
    font-size: 16px;
    margin-bottom: 30px;
`

export const PictureSlider = styled.div`
width: 100%;
    border: 10px solid ${({ theme }) => theme.colors.secondaryBg};
border-radius: 15px;
margin-bottom: 30px;
overflow: hidden;
`