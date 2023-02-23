import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import WeeklySalesChart from "./Charts/WeeklySalesChart";
import { Sparklines, SparklinesLine } from "react-sparklines";
import "../LeaderBoard.scss";

const TeamsSales = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const [TeamData, setTeamData] = useState([
    {
      id: 1,
      team_name: "Sales",
      team_revenue_gen_this_year: "473.2",
      team_revenue_gen_this_week: "52.5",
      team_revenue_gen_last_week: "30.2",
      team_target_percentage: "39",
      team_target: "1.2",
      weekly_sales_data: [70000, 40000, 70000, 60000, 90000, 90000, 80000],
    },
  ]);
  // console.log(TeamData[0].id);

  const [data, setData] = useState([
    {
      id: 1,
      p_name: "Dale",
      p_region: "North East",
      p_img: "https://i.imgur.com/5ap8AqT.jpg?imagerefresh=1677044200774",
      team: "sales",
      target: "300",
      target_percentage: "31",
      revenue_gen_this_year: "93.3",
      revenue_gen_this_week: "4.5",
      sparkline_data: [2, 15, 7, 10, 5, 12, 8, 10],
    },
    {
      id: 2,
      p_name: "Nick",
      p_region: "Mid-West",
      p_img: "https://i.imgur.com/07l9Rzr.jpg?imagerefresh=1677044200773",
      team: "sales",
      target: "300",
      target_percentage: "33",
      revenue_gen_this_year: "101",
      revenue_gen_this_week: "4",
      sparkline_data: [6, 12, 7, 10, 5, 11, 6, 4],
    },
    {
      id: 3,
      p_name: "Paul",
      p_region: "West",
      p_img: "https://i.imgur.com/SkWtsXj.jpg?imagerefresh=1677044200770",
      team: "sales",
      target: "300",
      target_percentage: "48",
      revenue_gen_this_year: "145",
      revenue_gen_this_week: "19",
      sparkline_data: [12, 15, 21, 18, 20, 24, 20, 21],
    },
    {
      id: 4,
      p_name: "Sam",
      p_region: "South",
      p_img: "https://i.imgur.com/9f7HcYj.jpg?imagerefresh=1677044200771",
      team: "sales",
      target: "300",
      target_percentage: "44",
      revenue_gen_this_year: "133",
      revenue_gen_this_week: "25",
      sparkline_data: [16, 22, 19, 24, 23, 26, 24, 28],
    },
  ]);

  return (
    <div className="LHS_RHS_BOTTOM containerLayoutDashboardLayout text-color-2 bg-color1 container-fluid d-grid gap-3 px-5 pt-5 ">
      {/* First Row Start LHS and RHS */}
      <div className="LHS-RHS row d-flex gap-0 flex-row justify-content-between">
        {/* LHS Start */}
        <div className="container LHS col-4">
          <div className="TeamSales-LeaderBoard-WeeklySales d-grid gap-3">
            {/* TeamsSales */}
            <div
              className="TeamsSales row ps-2 pt-2 m-0 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <p
                className="mb-0 fw-semibold pt-2"
                style={{ fontSize: "1.5vw" }}
              >
                Team Sales
              </p>

              <div
                className="row d-flex flex-nowrap"
                style={{ fontSize: "3.5vw" }}
              >
                <div className="col-md-6 text-start">
                  <div className="d-flex align-items-baseline">
                    <p className="fw-bold m-0" style={{ fontSize: "2vw" }}>
                      $
                    </p>
                    <p className="fw-bold m-0">
                      {TeamData[0].team_revenue_gen_this_year}
                    </p>
                    <p className="fw-bold m-0" style={{ fontSize: "2vw" }}>
                      K
                    </p>
                  </div>

                  <p
                    className="fw-semibold mt-1 d-flex flex-nowrap"
                    style={{ fontSize: "1.7vw" }}
                  >
                    this year
                  </p>

                  {/*Team Sales Progress Bar */}
                  <div className="team-sales-progress-bar-container ">
                    <div className="progress" style={{ height: "0.6vw" }}>
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{
                          width: `${TeamData[0].team_target_percentage}%`,
                        }}
                      ></div>
                    </div>
                    <div className="progress-bar-indicator d-flex justify-content-between">
                      <div
                        className="achieved-percentage-text text-info fw-bold"
                        style={{ fontSize: "0.6vw" }}
                      >
                        {TeamData[0].team_target_percentage}%
                      </div>
                      <div className="total-target-text d-flex align-items-baseline">
                        <span
                          className="fw-bold"
                          style={{
                            fontSize: "0.4vw",
                            marginRight: "0.1vw",
                          }}
                        >
                          $
                        </span>
                        <span
                          className="align-baseline fw-bold"
                          style={{ fontSize: "0.6vw" }}
                        >
                          {TeamData[0].team_target}
                        </span>
                        <span
                          className="align-baseline fw-bold"
                          style={{
                            fontSize: "0.4vw",
                            marginLeft: "0.1vw",
                          }}
                        >
                          M
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 text-start">
                  <div className="ps-2 d-flex align-items-baseline">
                    <p className="fw-bold m-0" style={{ fontSize: "2vw" }}>
                      $
                    </p>
                    <p className="fw-bold m-0">
                      {TeamData[0].team_revenue_gen_this_week}
                    </p>
                    <p className="fw-bold m-0" style={{ fontSize: "2vw" }}>
                      K
                    </p>
                  </div>

                  <p
                    className="ps-2 fw-semibold mt-1 d-flex flex-nowrap"
                    style={{ fontSize: "1.7vw" }}
                  >
                    this week
                  </p>

                  <div className="d-flex align-items-center m-0">
                    <span
                      className="color-3 d-flex align-items-start"
                      style={{ fontSize: "2vw" }}
                    >
                      <IoMdArrowDropup />
                    </span>
                    <div className="color-3 d-flex align-items-baseline">
                      <span className="fw-bold m-0" style={{ fontSize: "1vw" }}>
                        $
                      </span>
                      <span className="fw-bold m-0" style={{ fontSize: "1.5vw" }}>
                        {TeamData[0].team_revenue_gen_last_week}
                      </span>
                      <span className="fw-bold pe-2 m-0" style={{ fontSize: "1vw" }}>
                        K
                      </span>
                    </div>
                    <span
                      className="text-nowrap fw-semibold nowrap m-0 d-flex align-items-start"
                      style={{ fontSize: "1vw" }}
                    >
                      V last week
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* TeamsSales */}

            {/* LeaderBoardThisYear */}
            <div
              className="LeaderBoardThisYear row ps-2 pt-2 m-0 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <p className="mb-0 fw-semibold" style={{ fontSize: "1.5vw" }}>
                LeaderBoardThisYear
              </p>
              <ol className="list-unstyled mt-2 fw-normal">
                {data &&
                  data.map((item) => (
                    <div key={item.id}>
                      <li
                        className="small fw-bold p-0 my-1 d-flex justify-content-between"
                        style={{ fontSize: "1vw" }}
                      >
                        {item.p_name}
                        <div className="d-flex justify-content-end">{`$${item.revenue_gen_this_year}K`}</div>
                      </li>
                      <hr className="m-0" />
                    </div>
                  ))}
              </ol>
            </div>
            {/* LeaderBoardThisYear */}

            {/* WeeklySalesChart */}
            <div
              className=" WeeklySalesChart row p-0 m-0 h-100 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <span className="pt-2 m-0 fw-semibold" style={{ fontSize: "1.5vw" }}>
                WeeklySales
              </span>
              <WeeklySalesChart data={TeamData} />
            </div>
            {/* WeeklySalesChart */}
          </div>
        </div>
        {/* LHS End */}

        {/* RHS Start */}
        <div className="RHS container col-8 p-0 m-0 ps-3">
          <div className="row d-flex gap-3 ">
            {/* gap-3 */}
            {data &&
              data?.map((items, index) => (
                <div
                  key={items.id}
                  className={`data-element bg-color2 rounded p-0 d-flex flex-column ${
                    index !== 0 ? "" : ""
                  }`}
                >
                  <div
                    className="container row rounded d-flex justify-content-between flex-row flex-nowrap h-100 p-0 m-0"
                    style={{ fontSize: "3.5vw" }}
                  >
                    {/* Heading */}
                    <div className="col-2 pt-2">
                      <h1
                        className="Heading m-0 p-0 fw-bold text-nowrap lh-sm"
                        style={{ fontSize: "2.5vw" }}
                      >
                        {items.p_name}
                      </h1>
                      <header>
                        <h1
                          className="p-0 text-nowrap lh-sm"
                          style={{ fontSize: "1.5vw" }}
                        >
                          {items.p_region}
                        </h1>
                      </header>
                    </div>
                    {/* Image */}
                    <div className="col Image p-0 w-100">
                      <div className="Image profileIcon h-100 ">
                        <img
                          className="img-fluid h-100 "
                          src={items.p_img}
                          alt="Profile Icon"
                        />
                      </div>
                    </div>

                    {/* This Year */}
                    <div className="col This-year-container container m-0 p-2 w-25 h-100 d-flex flex-column justify-content-between">
                      <div className="this-year-text-data">
                        <span
                          className="fw-bold align-baseline"
                          style={{ fontSize: "2vw" }}
                        >
                          $
                        </span>
                        <span className="fw-bold align-baseline">
                          {items.revenue_gen_this_year}
                        </span>
                        <span
                          className="fw-bold align-baseline"
                          style={{ fontSize: "2vw" }}
                        >
                          K
                        </span>
                      </div>
                      <div
                        className="this-year-text fw-semibold"
                        style={{ fontSize: "1vw" }}
                      >
                        this year
                      </div>

                      {/* Individual Progress Bar */}
                      <div className="percentage-bar-container d-flex flex-column">
                        <div className="progress" style={{ height: "0.6vw" }}>
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: `${items.target_percentage}%` }}
                          ></div>
                        </div>
                        <div className="progress-bar-indicator d-flex justify-content-between">
                          <div
                            className="achieved-percentage-text text-info fw-bold"
                            style={{ fontSize: "0.6vw" }}
                          >
                            {items.target_percentage}%
                          </div>
                          <div className="total-target-text d-flex align-items-baseline">
                            <span
                              className="fw-bold"
                              style={{
                                fontSize: "0.25vw",
                                marginRight: "0.1vw",
                              }}
                            >
                              $
                            </span>
                            <span
                              className="align-baseline fw-bold"
                              style={{ fontSize: "0.6vw" }}
                            >
                              {items.target}
                            </span>
                            <span
                              className="align-baseline fw-bold"
                              style={{
                                fontSize: "0.25vw",
                                marginLeft: "0.1vw",
                              }}
                            >
                              K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* This Week */}
                    <div className="col-4 ThisWeek h-100 w-25 p-2 d-flex flex-column justify-content-between">
                      <div className="this-week-text-data">
                        <span
                          className="fw-bold align-baseline"
                          style={{ fontSize: "2vw" }}
                        >
                          $
                        </span>
                        <span className="fw-bold align-baseline">
                          {items.revenue_gen_this_week}
                        </span>
                        <span
                          className="fw-bold align-baseline"
                          style={{ fontSize: "2vw" }}
                        >
                          K
                        </span>
                      </div>
                      <div
                        className="this-week-text fw-semibold"
                        style={{ fontSize: "1vw" }}
                      >
                        this week
                      </div>

                      <div className="spark-line-chart-container d-flex justify-content-start">
                        <Sparklines
                          className="spark-line-chart-data"
                          data={items.sparkline_data}
                          limit={8}
                        >
                          <SparklinesLine color="#00D1FF" />
                        </Sparklines>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* RHS End */}
      </div>
      {/* First Row End LHS and RHS */}

      {/* Second Start End LHS and RHS */}
      {/* Bottom Start */}
      <div className="Bottom d-flex justify-content-between align-items-center">
        <div className="">
          <img
            className="me-3"
            style={{ maxWidth: "6%", maxHeight: "10%" }}
            src="https://play-lh.googleusercontent.com/g5WIaqQ00BCBnBsktGwbBISJDOuDLrn7TEupVk_5gDznboxSvUHs-oxi9zvqXAvdLA"
            alt="icon"
          ></img>
          <span className="Bottom-text">Sales team leader board</span>
          <span className="Bottom-text-1 ps-3 text-end ">Powered by Lystloc</span>
        </div>

        <div className="Bottom-text d-flex justify-content-end p-0 m-0">{`${hours}:${minutes}`}</div>
      </div>
      {/* Bottom Start */}
      {/* Second Row End LHS and RHS */}
    </div>
  );
};

export default TeamsSales;
