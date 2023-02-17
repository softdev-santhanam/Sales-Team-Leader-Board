import React, { useState } from "react";
import "../../App.css";
import { Sparklines, SparklinesLine } from "react-sparklines";

const Individuals = () => {
  const [weekSales, setWeekSales] = useState("10k");
  const [yearSales, setYearSales] = useState("100k");
  const [percentage, setPercentage] = useState(75);
  return (
    <div>
      <div style={{ height: "10vh" }}>
        <p className="ps-2 pt-2 fw-bold">Dale</p>
        <p className="ps-2 pb-2 fw-bold">North East</p>
      </div>
      <div
        className="rounded d-flex flex-column justify-content-evenly"
        style={{ height: "78vh" }}
      >
        <div className="crop-container">
          <img
            className="img-fluid h-100"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Profile Icon"
          />
        </div>

        <div className="percentage-chart">
          <h3 className="ps-3 fw-bold mt-4">{yearSales}</h3>
          <p className="fw-bold ps-3">this year</p>
          <div className="d-flex justify-content-center">
            <div className="progress" style={{ height: "10px", width: "90%" }}>
              <div
                className="progress-bar bg-info "
                role="progressbar"
                style={{ width: `${percentage}%` }}
              >
                {percentage}%
              </div>
            </div>
          </div>
        </div>

        <div className="line-chart mt-4 mb-2">
          <h3 className="ps-3 fw-bold">{weekSales}</h3>
          <p className="fw-bold ps-3 mb-0">this week</p>
          <Sparklines
            data={[2, 15, 7, 10, 5, 20, 8, 15]}
            limit={8}
            width={70}
            height={20}
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
