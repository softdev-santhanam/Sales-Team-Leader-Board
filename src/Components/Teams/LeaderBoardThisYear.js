import React, { useState } from "react";


const LeaderBoardThisYear = () => {
  const [yearSales, setYearSales] = useState("100k");
  return (
    <div className="rounded p-2 fw-bold min-vh-25" style={{ height: "28.6vh" }}>
      <p className="font-stretch-normal m-0">LeaderBoardThisYear</p>
      <ol className="max-height-50vh list-unstyled mt-4">
        <li className="large p-0 m-0 d-flex justify-content-between">Paul<div className="d-flex justify-content-end">{yearSales}</div></li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">Sam<div className="d-flex justify-content-end">{yearSales}</div></li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">Nick<div className="d-flex justify-content-end">{yearSales}</div></li>
        <hr className="m-0" />
        <li className="large p-0 m-0 d-flex justify-content-between">Dale<div className="d-flex justify-content-end">{yearSales}</div></li>
      </ol>
    </div>
  );
};

export default LeaderBoardThisYear;
