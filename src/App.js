import "./App.css";
import TeamsSales from "./Components/Teams/TeamsSales";
import LeaderBoardThisYear from "./Components/Teams/LeaderBoardThisYear";
import WeeklySales from "./Components/Teams/WeeklySales";
import Individuals from "./Components/Individuals/Individuals";
import Bottom from "./Components/Bottom/Bottom";

function App() {
  return (
    <div className="container main-grid-container bg-color1 text-white d-grid gap-2 p-0 m-auto">
      <div className="row pt-3 ">
        <div className="col-sm-4 d-grid gap-2 d-flex flex-column">
          <div className="row bg-color2 rounded flex-fill">
            <TeamsSales />
          </div>
          <div className="row bg-color2 rounded flex-fill">
            <LeaderBoardThisYear />
          </div>
          <div className="row bg-color2 rounded flex-fill">
            <WeeklySales />
          </div>
        </div>
        <div className="container col-sm-8 d-flex gap-2 ps-2 pe-0">
          <div className="col-sm-3 bg-color2 rounded flex-fill">
            <Individuals />
          </div>
          <div className="col-sm-3 bg-color2 rounded flex-fill">
            <Individuals />
          </div>
          <div className="col-sm-3 bg-color2 rounded flex-fill">
            <Individuals />
          </div>
          <div className="col-sm-3 bg-color2 rounded flex-fill">
            <Individuals />
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <Bottom />
      </div>
    </div>
  );
}

export default App;
