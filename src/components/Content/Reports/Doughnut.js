import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
  },
  tooltips: {
    enabled: true,
  },
  scales: {
    xAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          display: false,
        },
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

const year = {
  labels: ["Utilities", "Food", "Beauty"],
  data: [1000, 4500, 2000],
};

const week = {
  labels: ["UTILITIES", "FOOD", "Beauty"],
  data: [200, 400, 600],
};

const LineGraph = ({ data }) => {

  const [datas, setDatas] = useState(year);

  useEffect(() => {
    if (data === "year") {
      setDatas(year);
    } else if (data === "week") {
      setDatas(week);
    }
  }, [data]);

  const getData = () => {
    return {
      labels: datas.labels,
      datasets: [
        {
          data: datas.data,
          backgroundColor: [
            "rgb(209, 213, 219)",
            "rgb(156, 163, 175)",
            "rgb(107, 114, 128)",
          ],
          hoverOffset: 2,
        },
      ],
    };
  };
  
  const chartData = getData();

  return (
    <>
      <div className="doughnut">
        <Doughnut data={chartData} options={options} height={400} width={400} />
      </div>
      <ul className="doughnut-content">
        <li className="doughnut-content-item">
          <div className="doughnut-content-item-type">
            <div className="doughnut-content-item-type-color light"></div>{" "}
            Utilities
          </div>
          <p>${datas.data[0]}</p>
          {console.log(datas.data[0])}
        </li>
        <li className="doughnut-content-item">
          <div className="doughnut-content-item-type">
            <div className="doughnut-content-item-type-color normal"></div>
            Food
          </div>
          <p>${datas.data[1]}</p>
        </li>
        <li className="doughnut-content-item">
          <div className="doughnut-content-item-type">
            <div className="doughnut-content-item-type-color dark "></div>
            Beauty
          </div>
          <p>${datas.data[2]}</p>
        </li>
      </ul>
    </>
  );
};

export default LineGraph;
