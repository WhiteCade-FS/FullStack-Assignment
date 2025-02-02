import React, { useState } from "react";
import Chart1 from "../charts/Chart1";
import Chart2 from "../charts/Chart2";

function Dashboard() {
  const [chartData1] = useState([
    { name: "Page A", uv: 4000, pv: 2400 },
    { name: "Page B", uv: 3000, pv: 1398 },
    { name: "Page C", uv: 2000, pv: 9800 },
    { name: "Page D", uv: 2780, pv: 3908 },
    { name: "Page E", uv: 1890, pv: 4800 },
    { name: "Page F", uv: 2390, pv: 3800 },
    { name: "Page G", uv: 3490, pv: 4300 },
  ]);

  const [chartData2] = useState([
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ]);

  return (
    <div style={styles.dashboardContainer}>
      <h1>Dashboard</h1>
      <div style={styles.chartContainer}>
        <Chart1 data={chartData1} />
        <Chart2 data={chartData2} />
      </div>
    </div>
  );
}

export default Dashboard;

const styles = {
  dashboardContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "20px",
  },
  chartContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
  },
};
