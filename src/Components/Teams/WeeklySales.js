import React from "react";
import WeeklySalesChart from "../Charts/WeeklySalesChart";

const WeeklySales = () => {
  return (
    <div className="rounded" style={{ height: "28.6vh" }}>
      <div className="pt-2 fw-semibold" style={{ fontSize: "2vw" }}>WeeklySales</div>
      <WeeklySalesChart />
    </div>
  );
};

export default WeeklySales;
