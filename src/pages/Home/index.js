import React from "react";
import Chart from "../Chart";
import "./styles.css";
import Menu from "./../../components/Menu";
function Home() {
  return (
    <>
      <div className="main">
        <Menu />
        <Chart />
      </div>
    </>
  );
}

export default Home;
