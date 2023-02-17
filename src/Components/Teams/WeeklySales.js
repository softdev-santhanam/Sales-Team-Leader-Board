import React from "react";
import WeeklySalesChart from "../Charts/WeeklySalesChart";

const WeeklySales = () => {
  return (
    <div className="rounded" style={{ height: "28.6vh" }}>
      <div className="ps-2 pt-2">WeeklySales</div>
      <WeeklySalesChart />
    </div>
  );
};

export default WeeklySales;
