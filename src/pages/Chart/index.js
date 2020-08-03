import React from "react";
import BarChart from "../../components/BarChart";
import "./styles.css";
import LineChart from "../../components/LineChart";
import HorizontalB from "../../components/HorizontalBar";

function Chart() {
  return (
    <div className="chartBox">
      <BarChart />
      <LineChart />
      <HorizontalB />
    </div>
  );
}

export default Chart;
