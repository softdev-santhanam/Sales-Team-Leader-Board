import React, { useState } from "react";
import "../../App.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Individuals = () => {
  const [weekSales, setWeekSales] = useState(4.5);
  const [yearSales, setYearSales] = useState(93.8);
  const [percentage, setPercentage] = useState(90);
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <p className="ps-2 pt-2 fw-bold">Dale</p>
        <p className="ps-2 pb-2 fw-bold">North East</p>
      </div>
      <div
        className="rounded d-flex flex-column justify-content-between"
        style={{ height: "78vh", fontSize: "4vw" }}
      >
        <div className="crop-container">
          <img
            className="img-fluid h-100"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Profile Icon"
          />
        </div>

        <div className="percentage-chart ">
          <div className="ps-3 d-flex align-items-baseline">
            <p className=" fs-2  fw-bold">$</p>
            <p className=" fw-bold mt-4 mb-0">
              {yearSales}
            </p>
            <p className=" fs-2  fw-bold">K</p>
          </div>
          <p className=" fw-semibold fs-3 ps-3 text-white nowrap">this year</p>
          <div className="d-flex justify-content-center">
            <div className="progress" style={{ height: "10px", width: "90%" }}>
              <div
                className="progress-bar bg-info"
                role="progressbar"
                style={{ width: `${percentage}%` }}
              >
                {percentage}%
              </div>
            </div>
          </div>
        </div>

        <div className="line-chart mt-4 mb-2">
          <div className="ps-3 d-flex align-items-baseline">
            <p className="fs-2  fw-bold">$</p>
            <p className="fw-bold mt-4 mb-0">
              {weekSales}
            </p>
            <p className=" fs-2  fw-bold">K</p>
          </div>
          <p className=" fw-semibold fs-3 ps-3 mb-0 text-white nowrap">this week</p>
          <Sparklines
            data={[2, 15, 7, 10, 5, 20, 8, 15]}
            limit={8}
            width={100}
            height= {30}
            margin={5}
          >
            <SparklinesLine color="#00D1FF" />
          </Sparklines>
        </div>
      </div>
    </div>
  );
};

export default Individuals;
