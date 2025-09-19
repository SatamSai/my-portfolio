import React, { useEffect, useState } from "react";
import SectionTemplate from "../SectionTemplate";
import {
  Container,
  RankingCard,
  RankingLabel,
  RankingValue,
  SubmissionsContainer,
  SubmissionItem,
  SubmissionText,
  StatusBadge,
  SummarySection,
  QuestionStats,
  QuestionStat,
  QuestionTitle,
  QuestionFigures,
} from "./LeetCodeSection.styles";
import DoughnutChart from "./DoughtnutChart";
import { fetchLeetCodeProfile, fetchRecentSubmissions } from "../../services/leetcodeProfile";


const LeetCodeSection = () => {
  const [profile, setProfile] = useState(null);
  const [recent, setRecent] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await fetchLeetCodeProfile("sainam7740")
      const submissionData = await fetchRecentSubmissions("sainam7740")
      setProfile(profileData);
      setRecent(submissionData.submission)
    }

    fetchData()
  }, []);

  const recentSubs = recent?.slice(0, 3)

  if (!profile) return (
    <SectionTemplate title={"LeetCode"}>
      <div style={{ display: "flex", justifyContent: 'center', padding:20 }}>Loading....</div>
    </SectionTemplate>
  );

  return (
    <SectionTemplate title="LeetCode">
      <Container>
        <SummarySection>
          <DoughnutChart profile={profile} />
          <QuestionStats>
            <QuestionStat>
              <QuestionTitle color="#00CFFF">Easy</QuestionTitle>
              <QuestionFigures><strong>{profile.easySolved}</strong>/{profile.totalEasy}</QuestionFigures>
            </QuestionStat>
            <QuestionStat>
              <QuestionTitle color="#FFC107">Med.</QuestionTitle>
              <QuestionFigures><strong>{profile.mediumSolved}</strong>/{profile.totalMedium}</QuestionFigures>
            </QuestionStat>
            <QuestionStat>
              <QuestionTitle color="#FF4C4C">Hard</QuestionTitle>
              <QuestionFigures><strong>{profile.hardSolved}</strong>/{profile.totalHard}</QuestionFigures>
            </QuestionStat>
          </QuestionStats>
        </SummarySection>

        <RankingCard>
          <RankingLabel>Global Ranking</RankingLabel>
          <RankingValue>{profile.ranking.toLocaleString()}</RankingValue>
        </RankingCard>

        <h3>Recent Submissions</h3>
        <SubmissionsContainer>
          {recentSubs?.map((sub) => (
            <SubmissionItem key={sub.timestamp}>
              <SubmissionText>
                <p>{sub.title}</p>
                <p>{sub.lang}</p>
              </SubmissionText>
              <StatusBadge status={sub.statusDisplay}>
                {sub.statusDisplay}
              </StatusBadge>
            </SubmissionItem>
          ))}
        </SubmissionsContainer>
      </Container>
    </SectionTemplate>
  );
};

export default LeetCodeSection;

