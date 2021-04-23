import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const options = {
  responsive: true,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          callback: function (value) {
            return "$ " + value;
          },
        },
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const year = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  data: [
    3200,
    4600,
    3800,
    4800,
    3300,
    3600,
    3200,
    5000,
    4200,
    5000,
    4000,
    4700,
  ],
};

const week = {
  labels: ["Mon", "Tue", "Wed	", "Thu", "Fri", "Sat", "Sun"],
  data: [300, 600, 200, 400, 200, 800, 500],
};

const LineGraph = ({ data }) => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    if (data === "year") {
      setDatas(year);
    } else if (data === "week") {
      setDatas(week);
    }
  }, [data]);

  const getData = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 300, 0, 0);
    gradient.addColorStop(0, "#f3f4f6");
    gradient.addColorStop(1, "#9CA3AF");

    return {
      labels: datas.labels,
      datasets: [
        {
          label: "Spent",
          data: datas.data,
          backgroundColor: gradient,
          borderColor: "#4B5563",
        },
      ],
    };
  };

  const canvas = document.createElement("canvas");
  const chartData = getData(canvas);

  return <Line data={chartData} options={options} height={600} width={700} />;
};

export default LineGraph;
