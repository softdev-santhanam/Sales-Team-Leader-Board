import React, { useState } from "react";

const LeaderBoardThisYear = () => {
  const [yearSales, setYearSales] = useState("$100K");
  return (
    <div
      className="rounded ps-3 pt-2  min-vh-25 "
      style={{ height: "28.6vh", fontSize: "1.3vw" }}
    >
      <p className="mb-0 fw-semibold" style={{ fontSize: "2vw" }}>
        LeaderBoardThisYear
      </p>
      <ol className="max-height-50vh list-unstyled mt-4 fw-normal">
        <li className="large p-0 m-0 d-flex justify-content-between">
          Paul<div className="d-flex justify-content-end">{yearSales}</div>
        </li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">
          Sam<div className="d-flex justify-content-end">{yearSales}</div>
        </li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">
          Nick<div className="d-flex justify-content-end">{yearSales}</div>
        </li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">
          Dale<div className="d-flex justify-content-end">{yearSales}</div>
        </li>
      </ol>
    </div>
  );
};

export default LeaderBoardThisYear;
