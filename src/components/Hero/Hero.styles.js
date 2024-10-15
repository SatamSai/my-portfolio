import styled from 'styled-components';

export const HeroContainer = styled.div`
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    padding: 0px 10px;
    @media only screen and (max-width: 450px){
        gap: 7.5px;
        margin-bottom: 20px;
    }
`;

export const ProfileStatus = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    @media only screen and (max-width: 450px){
        height: 45px;
    }
`;

export const Role = styled.div`
    font-size: 19px;
    display: flex;
    align-items: center;
    @media only screen and (max-width: 600px){
        font-size: 17px;
    }
    @media only screen and (max-width: 450px){
        font-size: 15px;
    }
    @media only screen and (max-width: 400px){
        font-size: 13px;
    }
`;

export const Availablility = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.transparentGreen};
    padding: 0px 15px;
    border-radius:20px;
    font-size: 12px;
    height: 30px;
    @media only screen and (max-width: 600px){
        font-size: 10px;
        padding: 0px 13px;
        height: 29px;
    }
    @media only screen and (max-width: 450px){
        font-size: 9.5px;
        padding: 0px 11px;
        height: 27px;
    }
    @media only screen and (max-width: 400px){
        font-size: 8px;
        padding: 0px 11px;
        height: 25px;
    }
`;

export const Profile = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LeftContent = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Name = styled.h1`
    font-size: 24px;
    @media only screen and (max-width: 600px){
        font-size: 22px;
    }
    @media only screen and (max-width: 450px){
        font-size: 19.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 17px;
    }
`;

export const Description = styled.p`
    font-size: 15px;
    @media only screen and (max-width: 600px){
        font-size: 13px;
    }
    @media only screen and (max-width: 450px){
        font-size: 11.5px;
    }
    @media only screen and (max-width: 400px){
        font-size: 10px;
    }
`;

export const Button = styled.div`
    height: 40px;
    width: 100px;
    font-size: 13px;
    background-color:  ${({ theme }) => theme.colors.tertiaryBg};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: ${({ theme }) => theme.colors.primaryBg};
    }
    @media only screen and (max-width: 600px){
        font-size: 11.5px;
        height: 35px;
        width: 88px;
    }
    @media only screen and (max-width: 450px){
        font-size: 10.5px;
        height: 30px;
        width: 75px;
    }
    @media only screen and (max-width: 400px){
        font-size: 9px;
        height: 27px;
        width: 68px;
    }
`;

export const ProfileImg = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 10px solid ${({ theme }) => theme.colors.tertiaryBg};
    @media only screen and (max-width: 600px){
        height: 140px;
        width: 140px;
    }
    @media only screen and (max-width: 450px){
        height: 125px;
        width: 125px;
        border: 8px solid ${({ theme }) => theme.colors.tertiaryBg};
    }
    @media only screen and (max-width: 400px){
        height: 115px;
        width: 115px;
        border: 6px solid ${({ theme }) => theme.colors.tertiaryBg};
    }
`;
