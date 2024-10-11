import styled from 'styled-components';

export const HeroContainer = styled.div`
    font-family: 'Inter';
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 30px;
    padding: 0px 10px;
`;

export const ProfileStatus = styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    height: 60px;
`;

export const Role = styled.div`
    font-size: 19px;
    display: flex;
    align-items: center;
`;

export const Availablility = styled.div`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.transparentGreen};
    padding: 10px 15px;
    border-radius:20px;
    font-size: 12px;
    height: 30px;
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
`;

export const Description = styled.p`
    font-size: 15px;
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
`;

export const ProfileImg = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    border: 10px solid ${({ theme }) => theme.colors.tertiaryBg};
`;
