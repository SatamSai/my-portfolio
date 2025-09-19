import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DoughnutContent, DoughnutWrapper } from "./LeetCodeSection.styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ profile }) => {
  const data = {
    labels: ["Easy", "Easy", "Medium", "Medium", "Hard", "Hard"],
    datasets: [
      {
        label: "Solved",
        data: [
          profile.easySolved,
          profile.totalEasy - profile.easySolved,
          profile.mediumSolved,
          profile.totalMedium - profile.mediumSolved,
          profile.hardSolved,
          profile.totalHard - profile.hardSolved,
          profile.hardUnsolved,
          profile.totalSolved - (profile.easySolved + profile.mediumSolved + profile.hardSolved) > 0
            ? profile.totalSolved - (profile.easySolved + profile.mediumSolved + profile.hardSolved)
            : 0,
        ],
        backgroundColor: [
          "#00CFFF",
          "#00CFFF55",
          "#FFC107",
          "#FFC10755",
          "#FF4C4C",
          "#FF4C4C55",
        ],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "85%",
    rotation: -135,
    circumference: 270,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <DoughnutWrapper>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <DoughnutContent>
          <div><span>{profile.totalSolved}</span>/{profile.totalQuestions}</div>
          <p>Solved</p>
        </DoughnutContent>
      </div>
    </DoughnutWrapper>
  );
};

export default DoughnutChart;
