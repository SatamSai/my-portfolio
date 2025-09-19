import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  border-radius: 12px;
  padding: 20px;
`;

export const SummarySection = styled.div`
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
  }
`

export const DoughnutWrapper = styled.div`
  width: 60%;
  position: relative;
`

export const DoughnutContent = styled.h1`
  margin-top: 20%;
  font-size: 22px;

  span{
    font-size: 3rem;
  }
  p{
    font-size: 1rem;
  }
  @media only screen and (max-width: 500px){
    margin-top: 30%;
    font-size: 12px;
    line-height: 25px;
    span{
      font-size: 2rem;
    }
    p{
      font-size: 11px;
    }
  }
`

export const QuestionStat = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryBg};
  width: 140px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 16px;
  border-radius: 10px;

  @media only screen and (max-width: 500px){
    width: 100px;
    height: 60px;
    font-size: 12px;
  }
`
export const QuestionTitle = styled.div`
  color: ${({color}) => color};
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
  background: ${({ theme }) => theme.colors.tertiaryBg};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 1rem;
  padding: 1rem;
`;

export const RankingLabel = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const RankingValue = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const SubmissionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SubmissionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.tertiaryBg};
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
`;

export const SubmissionText = styled.div`
  p:first-child {
    font-weight: 500;
    margin-bottom: 0.25rem;
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
      ? theme.colors.green
      : status.includes("Wrong")
      ? "#fee2e2"
      : status.includes("Runtime")
      ? "#fef9c3"
      : status.includes("Time")
      ? "#ffedd5"
      : "#e5e7eb"};
  color: ${({ status }) =>
    status === "Accepted"
      ? "#065f46"
      : status.includes("Wrong")
      ? "#991b1b"
      : status.includes("Runtime")
      ? "#92400e"
      : status.includes("Time")
      ? "#9a3412"
      : "#374151"};
`;

