import React, { useEffect, useState } from "react";
import SectionTemplate from "../SectionTemplate";
import HeatMap from "./HeatMap";
import DoughnutChart from "./DoughtnutChart";
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
  MoreData,
  MoreDetailsButton,
  DoughnutShimmer,
  QuestionStatShimmer,
} from "./LeetCodeSection.styles";
import {
  fetchLeetCodeProfile,
  fetchRecentSubmissions,
} from "../../services/leetcodeProfile";
import { username } from "../../contants/constants";
import MoreIcon from "../../assets/circular-caret-down.svg";

const LeetCodeSection = () => {
  const [profileState, setProfileState] = useState({
    status: "loading", // "loading" | "success" | "failure"
    data: null,
  });
  const [recentSubs, setRecentSubs] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setProfileState({ status: "loading", data: null });
      try {
        const profileData = await fetchLeetCodeProfile(username);
        const submissionData = await fetchRecentSubmissions(username);

        setProfileState({ status: "success", data: profileData });
        setRecentSubs(submissionData.submission.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch LeetCode data:", error);
        setProfileState({ status: "failure", data: null });
      }
    };
    setTimeout(() => {
      fetchData();
    }, 3000)
  }, []);

  const questionStats = [
    { label: "Easy", color: "#00CFFF", solved: profileState.data?.easySolved, total: profileState.data?.totalEasy },
    { label: "Med.", color: "#FFC107", solved: profileState.data?.mediumSolved, total: profileState.data?.totalMedium },
    { label: "Hard", color: "#FF4C4C", solved: profileState.data?.hardSolved, total: profileState.data?.totalHard },
  ];

  return (
    <SectionTemplate title="LeetCode">
      <Container>
        <SummarySection>
          <SummaryWrapper>
            {profileState.status === "success" ? (
              <DoughnutChart profile={profileState.data} />
            ) : profileState.status === "loading" ? (
              <DoughnutShimmer />
            ) : (
              <div style={{ width: '55%', aspectRatio: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                Failed to load profile
              </div>
            )}

            <QuestionStats>
              {profileState.status != "loading"
                ? questionStats.map((stat) => (
                  <QuestionStat key={stat.label}>
                    <QuestionTitle color={stat.color}>{stat.label}</QuestionTitle>
                    <QuestionFigures>
                      <strong>{stat.solved || " - "}</strong>/{stat.total || " - "}
                    </QuestionFigures>
                  </QuestionStat>
                ))
                : questionStats.map((_, idx) => <QuestionStatShimmer key={idx} />)}
            </QuestionStats>
          </SummaryWrapper>

          <RankingCard>
            <RankingLabel>Global Ranking:</RankingLabel>
            <RankingValue>
              {profileState.status === "success"
                ? `#${profileState.data?.ranking?.toLocaleString()}`
                : profileState.status === "loading"
                  ? "..."
                  : "-"}
            </RankingValue>
          </RankingCard>
        </SummarySection>

        <MoreData show={showMore}>
          {profileState.status === "success" && (
            <>
              <HeatMap />
              <SubmissionsContainer>
                <h3 style={{ marginBottom: "10px" }}>Recent Submissions</h3>
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
            </>
          )}
        </MoreData>

        <MoreDetailsButton show={showMore}>
          <p onClick={() => setShowMore((prev) => !prev)}>
            More Details <img src={MoreIcon} alt="more" />
          </p>
        </MoreDetailsButton>
      </Container>
    </SectionTemplate>
  );
};


export default LeetCodeSection;
