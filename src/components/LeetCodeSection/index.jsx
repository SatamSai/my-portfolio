import React, { useEffect, useState } from "react";
import SectionTemplate from "../SectionTemplate";
import DoughnutChart from "./DoughtnutChart";
import HeatMap from "./HeatMap";
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
  SummaryWrapper,
} from "./LeetCodeSection.styles";
import {
  fetchLeetCodeProfile,
  fetchRecentSubmissions,
} from "../../services/leetcodeProfile";
import { username } from "../../contants/constants";

const LeetCodeSection = () => {
  const [profile, setProfile] = useState(null);
  const [recentSubs, setRecentSubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchLeetCodeProfile(username);
        const submissionData = await fetchRecentSubmissions(username);

        setProfile(profileData);
        setRecentSubs(submissionData.submission.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
      }
    };

    fetchData();
  }, []);

  if (!profile) {
    return (
      <SectionTemplate title="LeetCode">
        <div style={{ display: "flex", justifyContent: "center", padding: 20 }}>
          Loading...
        </div>
      </SectionTemplate>
    );
  }

  const questionStats = [
    { label: "Easy", color: "#00CFFF", solved: profile.easySolved, total: profile.totalEasy },
    { label: "Med.", color: "#FFC107", solved: profile.mediumSolved, total: profile.totalMedium },
    { label: "Hard", color: "#FF4C4C", solved: profile.hardSolved, total: profile.totalHard },
  ];

  return (
    <SectionTemplate title="LeetCode">
      <Container>
        <SummarySection>
          <SummaryWrapper>
            <DoughnutChart profile={profile} />
            <QuestionStats>
              {questionStats.map((stat) => (
                <QuestionStat key={stat.label}>
                  <QuestionTitle color={stat.color}>{stat.label}</QuestionTitle>
                  <QuestionFigures>
                    <strong>{stat.solved}</strong>/{stat.total}
                  </QuestionFigures>
                </QuestionStat>
              ))}
            </QuestionStats>
          </SummaryWrapper>

          <RankingCard>
            <RankingLabel>Global Ranking:</RankingLabel>
            <RankingValue>#{profile.ranking.toLocaleString()}</RankingValue>
          </RankingCard>
        </SummarySection>

        {/* Heat Map */}
        <HeatMap />

        {/* Recent Submissions */}
        <SubmissionsContainer>
          <h3 style={{marginBottom:'10px'}}>Recent Submissions</h3>
          {recentSubs.map((sub) => (
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
