import React, { useEffect } from "react";
import * as echarts from "echarts";

const WeeklySalesChart = (props) => {
  const { data } = props;
  // console.log(data[0].weekly_sales_data);
  const chartData = data[0].weekly_sales_data;

  useEffect(() => {
    var chartDom = document.getElementById("myChart1");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
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

    option && myChart.setOption(option);
  }, [chartData]);
  return <div id="myChart1" className="h-100"></div>;
};

export default WeeklySalesChart;
