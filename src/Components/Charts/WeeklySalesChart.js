import React, { useEffect } from "react";
import * as echarts from "echarts";

const WeeklySalesChart = (props) => {
  const { data } = props;
  const chartData = data[0].weekly_sales_data;

  useEffect(() => {
    const chartDom = document.getElementById("myChart1");
    const myChart = echarts.init(chartDom);

    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        axisLine: {
          lineStyle: {
            color: "#FFFFFF",
          },
        },
      },

      yAxis: {
        type: "value",
        min: 0,
        max: 100000,
        interval: 50000,
        splitLine: {
          lineStyle: {
            type: "solid",
            opacity: 0.2,
          },
          show: true,
          interval: 50000,
        },
        axisLine: {
          lineStyle: {
            color: "#FFFFFF",
          },
        },
        axisLabel: {
          formatter: function (value) {
            return "$" + echarts.format.addCommas(value / 1000) + "K";
          },
        },
      },

      series: [
        {
          data: chartData,
          type: "line",
          lineStyle: {
            opacity: 0.9,
            color: "#0DCAF0",
          },
        },
      ],
    };

    myChart.setOption(option);

    // Resize chart when window is resized
    const resizeChart = () => {
      myChart.resize();
    };

    window.addEventListener("resize", resizeChart);

    return () => {
      window.removeEventListener("resize", resizeChart);
    };
  }, [chartData]);

  return (
    <div
      id="myChart1"
      className="WeeklySalesChart d-flex  ps-3"
      style={{
        height: "100%",
        width: "90%",
        position: "relative",
        top: "-20px",
        overflow: "visible",
      }}
    ></div>
  );
};

export default WeeklySalesChart;
