import React, { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import WeeklySalesChart from "./Charts/WeeklySalesChart";
import { Sparklines, SparklinesLine } from "react-sparklines";

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
      sparkline_data: [2, 15, 7, 10, 5, 20, 8, 15],
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
      sparkline_data: [2, 15, 7, 10, 5, 14, 6, 4],
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
      sparkline_data: [12, 15, 7, 18, 8, 24, 8, 15],
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
      sparkline_data: [14, 15, 8, 18, 12, 24, 18, 26],
    },
  ]);

  return ( 
    <div className="LHS_RHS_BOTTOM container-fluid d-grid gap-3 p-5">
      {/* First Row Start LHS and RHS */}
      <div className="LHS-RHS row d-flex flex-row justify-content-between">
        {/* LHS Start */}
        <div className="container LHS col-4 d-grid gap-3">
          <div className="TeamSales-LeaderBoard-WeeklySales row d-grid gap-3 ">
            {/* TeamsSales */}
            <div
              className="TeamsSales row ps-3 pt-2 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <p className="mb-0 fw-semibold pt-2" style={{ fontSize: "2vw" }}>
                Team Sales
              </p>

              <div className="row" style={{ fontSize: "4vw" }}>
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

                  <p className="fw-semibold fs-5 text-white nowrap mt-1">
                    this year
                  </p>

                  <div className="d-flex flex-column py-3 my-3">
                    <div
                      className="progress"
                      style={{ height: "10px", width: "100%" }}
                    >
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
                        className="percentage-text text-info fw-bold"
                        style={{ fontSize: "10px" }}
                      >
                        {TeamData[0].team_target_percentage}%
                      </div>
                      <div className="target-text d-flex align-items-baseline">
                        <span
                          className="fw-bold"
                          style={{ fontSize: "5px", marginRight: "1px" }}
                        >
                          $
                        </span>
                        <span
                          className="align-baseline fw-bold"
                          style={{ fontSize: "10px" }}
                        >
                          {TeamData[0].team_target}
                        </span>
                        <span
                          className="align-baseline fw-bold"
                          style={{ fontSize: "5px", marginLeft: "1px" }}
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

                  <p className="ps-2 fw-semibold fs-5 text-white nowrap mt-1">
                    this week
                  </p>

                  <div className="d-flex align-items-center my-3">
                    <p className="fs-1 color-3 d-flex align-items-start">
                      <IoMdArrowDropup />
                    </p>
                    <div className="color-3 d-flex align-items-baseline">
                      <p className="fw-bold" style={{ fontSize: "1vw" }}>
                        $
                      </p>
                      <p className="fw-bold" style={{ fontSize: "1.5vw" }}>
                        {TeamData[0].team_revenue_gen_last_week}
                      </p>
                      <p className="fw-bold pe-2" style={{ fontSize: "1vw" }}>
                        K
                      </p>
                    </div>
                    <p
                      className="text-nowrap fw-semibold nowrap"
                      style={{ fontSize: "1vw" }}
                    >
                      V last week
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* TeamsSales */}

            {/* LeaderBoardThisYear */}
            <div
              className="LeaderBoardThisYear row ps-3 pt-2 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <p className="mb-0 fw-semibold" style={{ fontSize: "2vw" }}>
                LeaderBoardThisYear
              </p>
              <ol className="max-height-50vh list-unstyled mt-4 fw-normal">
                {data &&
                  data.map((item) => (
                    <div key={item.id}>
                      <li className="small fw-bolder p-0 my-2 d-flex justify-content-between">
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
              className=" WeeklySalesChart row ps-3 pt-2 bg-color2 rounded"
              style={{ fontSize: "1.3vw" }}
            >
              <div className="pt-2 fw-semibold" style={{ fontSize: "2vw" }}>
                WeeklySales
              </div>
              <WeeklySalesChart data={TeamData}/>
            </div>
            {/* WeeklySalesChart */}
          </div>
        </div>
        {/* LHS Start */}

        {/* RHS Start */}
        <div className="RHS container col-8 d-flex">
          <div className="row d-flex gap-3 flex-fill">
            {data &&
              data?.map((items, index) => (
                <div
                  key={items.id}
                  className={`data-element bg-color2 rounded d-flex flex-column ${
                    index !== 0 ? "" : ""
                  }`}
                >
                  <div
                    className="rounded d-flex justify-content-between flex-row"
                    style={{ fontSize: "4vw" }}
                  >
                    {/* Image */}
                    <div className="Image p-3 w-25 h-100">
                      {/* Heading */}
                      <div>
                        <h1
                          className="Heading m-0 pt-2 fw-bold text-nowrap lh-sm"
                          style={{ fontSize: "1.5vw", padding: "0.5vw" }}
                        >
                          {items.p_name}
                        </h1>
                        <header>
                          <h1
                            className="p-2 m-0 pb-2 text-nowrap lh-lg"
                            style={{ fontSize: "1.5vw" }}
                          >
                            {items.p_region}
                          </h1>
                        </header>
                      </div>
                      <div
                        className="Image profileIcon h-50"
                        style={{ height: "100px", width: "100px" }}
                      >
                        <img
                          className="img-fluid h-100 rounded-circle"
                          src={items.p_img}
                          alt="Profile Icon"
                        />
                      </div>
                    </div>

                    {/* This Year */}
                    <div className="ThisYear container p-3 w-25 h-100 d-flex flex-column">
                      <div className="">
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
                      <div className="fw-semibold fs-6 mb-3">this year</div>
                      <div className="d-flex flex-column">
                        <div
                          className="progress"
                          style={{ height: "10px", width: "100%" }}
                        >
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: `${items.target_percentage}%` }}
                          ></div>
                        </div>
                        <div className="progress-bar-indicator d-flex justify-content-between">
                          <div
                            className="percentage-text text-info fw-bold"
                            style={{ fontSize: "10px" }}
                          >
                            {items.target_percentage}%
                          </div>
                          <div className="target-text d-flex align-items-baseline">
                            <span
                              className="fw-bold"
                              style={{ fontSize: "5px", marginRight: "1px" }}
                            >
                              $
                            </span>
                            <span
                              className="align-baseline fw-bold"
                              style={{ fontSize: "10px" }}
                            >
                              {items.target}
                            </span>
                            <span
                              className="align-baseline fw-bold"
                              style={{ fontSize: "5px", marginLeft: "1px" }}
                            >
                              K
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* This Week */}
                    <div className="ThisWeek p-3 w-50 h-100">
                      <div className="">
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
                      <div className="fw-semibold fs-5">this week</div>
                      <Sparklines
                        data={items.sparkline_data}
                        limit={8}
                        width={100}
                        height={30}
                        margin={5}
                      >
                        <SparklinesLine color="#00D1FF" />
                      </Sparklines>
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
      <div className="Bottom row d-flex p-0 justify-content-between align-items-center">
        <div className="col-11 d-flex p-0 justify-content-start align-items-center">
          <img
            className="me-3"
            style={{ maxWidth: "6%", maxHeight: "10%" }}
            src="https://play-lh.googleusercontent.com/g5WIaqQ00BCBnBsktGwbBISJDOuDLrn7TEupVk_5gDznboxSvUHs-oxi9zvqXAvdLA"
            alt="icon"
          ></img>
          <span className="fs-5">Sales team leader board</span>
          <span className="fs-6 ps-3 text-end ">Powered by Lystloc</span>
        </div>

        <div className="fs-3 col-1 d-flex justify-content-end p-0">{`${hours}:${minutes}`}</div>
      </div>
      {/* Bottom Start */}
      {/* Second Row End LHS and RHS */}
    </div>
  );
};

export default TeamsSales;
