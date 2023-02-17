import React, { useEffect } from "react";
import * as echarts from "echarts";

const WeeklySalesChart = () => {
  useEffect(() => {
    var chartDom = document.getElementById("myChart1");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [50, 96, 82, 65, 42, 78, 96],
          type: "line",
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);
  return (
    <div
      id="myChart1" className="d-flex justify-content-center align-item-center"
      style={{ height: "200px", width: "auto", position: "relative", top: "-20px" }}
    ></div>
  );
};

export default WeeklySalesChart;
