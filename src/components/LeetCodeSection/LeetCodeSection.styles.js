import styled from "styled-components";

export const Shimmer = styled.div`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.tertiaryBg} 25%,
    ${({ theme }) => theme.colors.secondaryBg} 50%,
    ${({ theme }) => theme.colors.tertiaryBg} 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export const DoughnutShimmer = styled(Shimmer)`
  width: 55%;
  aspect-ratio: 1;
  @media only screen and (max-width: 500px) {
    width: 60%;
  }
`;

export const QuestionStatShimmer = styled(Shimmer)`
  width: 120px;
  height: 60px;
  @media only screen and (max-width: 500px) {
    width: 80px;
    height: 50px;
  }
`;

export const LeetCodeTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeetCodeLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover{
    color: #E5E5E5;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const SummarySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
  background: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 10px;
`

export const SummaryWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 500px){
    flex-direction: column;
  }
`

export const QuestionStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 500px){
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`

export const MoreData = styled.div`
  max-height: ${(props) => props.show ? "1000px" : "0px"};
  overflow: hidden;
  flex-direction: column;
  display: flex;
  gap: 1.5rem;
  transition: max-height 0.5s ease;
`

export const DoughnutWrapper = styled.div`
  width: 55%;
  aspect-ratio: 1;
  position: relative;
  @media only screen and (max-width: 500px){
    width: 60%;
  }
`

export const DoughnutContent = styled.h1`
  margin-top: 20%;
  font-size: 18px;

  span{
    font-size: 2rem;
  }
  p{
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 500px){
    margin-top: 30%;
    font-size: 12px;
    line-height: 25px;
    span{
      font-size: 1.5rem;
    }
    p{
      font-size: 11px;
    }
  }
`

export const QuestionStat = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBg};
  width: 120px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 14px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiaryBg};

  @media only screen and (max-width: 500px){
    width: 80px;
    height: 50px;
    font-size: 11px;
    margin-top: 10px;
  }
`
export const QuestionTitle = styled.div`
  color: ${({ color }) => color};
  font-weight: bold;
`
export const QuestionFigures = styled.div``

export const StatGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 1rem;
  width: 8rem;
  text-align: center;
`;

export const StatLabel = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const StatValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const RankingCard = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 10px;
  margin-top: 20px;
`;

export const RankingLabel = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 18px;
  @media only screen and (max-width: 500px){
    font-size: 12px;
  }
`;

export const RankingValue = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  font-size: 19px;
  @media only screen and (max-width: 500px){
    font-size: 13px;
  }
`;

export const SubmissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.secondaryBg};
`;

export const SubmissionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  gap: 2rem;
`;

export const SubmissionText = styled.div`
  flex: 1;
  min-width: 0;
  p:first-child {
    font-weight: 500;
    margin-bottom: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p:last-child {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;

export const StatusBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: ${({ status, theme }) =>
    status === "Accepted"
      ? "#00ff0033"
      : status.includes("Wrong")
        ? "#991b1b33"
        : status.includes("Runtime")
          ? "#991b1b33"
          : status.includes("Time")
            ? "#ce5c1533"
            : "#37415133"};
  color: ${({ status }) =>
    status === "Accepted"
      ? "#00FF00"
      : status.includes("Wrong")
        ? "#991b1b"
        : status.includes("Runtime")
          ? "#991b1b"
          : status.includes("Time")
            ? "#ce5c15ff"
            : "#374151"};
`;

export const MoreDetailsButton = styled.div`
  margin-top: ${({ show }) => show ? "0px" : "-1.5rem"};
  transition: margin 0.5s ease;
  color: ${({ theme }) => theme.colors.primaryText};
  p{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    img{
      height: 20px;
      transform: ${({ show }) => show ? "rotate(180deg)" : ""};
      transition: all 0.5s ease;
    }
  }
`