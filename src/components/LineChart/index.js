import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [
      {
        label: "Picos de volume",
        data: [104, 100, 103, 102, 100],
        backgroundColor: "red",
        borderColor: "red",
        pointBackgroundColor: "white",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Série histórica do volume de setor de serviços",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 100,
            max: 104,
            stepSize: 2,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            offsetGridLines: true,
            offset: true,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
};

export default LineChart;
