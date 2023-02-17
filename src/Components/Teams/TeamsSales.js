import React, { useState } from "react";

const TeamsSales = () => {
  const [weekSales, setWeekSales] = useState("10k");
  const [lastWeekSales, setLastWeekSales] = useState("30K");
  const [yearSales, setYearSales] = useState("100k");
  const [percentage, setPercentage] = useState(42);

  return (
    <div
      className="container rounded fw-bolder p-2"
      style={{ height: "28.6vh" }}
    >
      TeamsSales
      <div className="row mt-3">
        <div className="col">
          <div className="percentage-chart">
            <p className="ps-3 fw-bold fs-4">{yearSales}</p>
            <p className="fw-bold ps-3">this year</p>
            <div className="d-flex justify-content-center">
              <div
                className="progress mt-2"
                style={{ height: "10px", width: "90%" }}
              >
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
        </div>

        <div className="col p-0">
          <div className="">
            <p className="fw-bold fs-4">{weekSales}</p>
            <p className="fw-bold">this week</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="me-2 fs-4 text-success">{lastWeekSales}</p>
            <p className="text-nowrap fs-6">last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSales;
