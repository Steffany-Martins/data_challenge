import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: [
      "Transportes",
      "Outros",
      "Comunicação",
      "Administração",
      "Restaurante",
    ],
    datasets: [
      {
        label: "Encerrou definitivamente(P)",
        data: [16, 10, 21, 23, 22],
        backgroundColor: "red",
      },
      {
        label: "Encerrou temporariamente(P)",
        data: [20, 19, 11, 16, 23],
        backgroundColor: "orange",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Setores de Serviço mais impactados na pandemia",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 5,
            max: 23,
            stepSize: 5,
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
  return <Bar data={data} options={options} />;
};

export default BarChart;
