import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const HorizontalB = () => {
  const data = {
    labels: [
      "Àgua, luz e Telefone",
      "Aluguel",
      "Custos com encargos sociais",
      "Despesa com funcionário",
      "Financiamentos",
    ],
    datasets: [
      {
        label: "Fator Custo (Nota)",
        data: [3200, 3600, 2700, 4100, 2200],
        backgroundColor: "red",

        pointBackgroundColor: "white",
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "Custos que mais impactam na receita do restaurante (0 a 5)",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 1000,
            max: 4200,
            stepSize: 2000,
          },
        },
      ],
    },
  };
  return <HorizontalBar data={data} options={options} />;
};

export default HorizontalB;
