import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";

const TeamsSales = () => {
  const [weekSales, setWeekSales] = useState(50);
  const [lastWeekSales, setLastWeekSales] = useState(30);
  const [yearSales, setYearSales] = useState(100);
  const [percentage, setPercentage] = useState(42);

  return (
    <div className="container rounded" style={{ height: "28.6vh" }}>
      <p className="mb-0 fw-semibold pt-2" style={{ fontSize: "2vw" }}>
        Team Sales
      </p>
      <div
        className="row"
        style={{ fontSize: "5vw" }}
      >
        <div className="col-md-6 text-start">
          <div className="d-flex align-items-baseline">
            <p className="fs-2 fw-bold m-0">$</p>
            <p className="fw-bold m-0">{yearSales}</p>
            <p className="fs-2 fw-bold m-0">K</p>
          </div>

          <p className="fw-semibold fs-5 text-white nowrap m-0">this year</p>
          
          <div className="d-flex justify-content-start align-items-center">
            <div
              className="progress my-3"
              style={{ height: "10px", width: "90%" }}
            >
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

        <div className="col-md-6 text-start">
          <div className="ps-2 d-flex align-items-baseline">
            <p className="fs-2 fw-bold m-0">$</p>
            <p className="fw-bold m-0">{weekSales}</p>
            <p className="fs-2 fw-bold m-0">K</p>
          </div>

          <p className="ps-2 fw-semibold fs-5 text-white nowrap m-0">this week</p>

          <div className="d-flex align-items-center">
            <p className="fs-1 text-success d-flex align-items-start">
              <IoMdArrowDropup />
            </p>
            <div className="text-success d-flex align-items-baseline">
              <p className="fs-6 fw-bold">$</p>
              <p className="fw-bold fs-4">{lastWeekSales}</p>
              <p className="fs-6 fw-bold pe-2">K</p>
            </div>
            <p className="text-nowrap fs-6 fw-semibold text-white nowrap">V last week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsSales;
