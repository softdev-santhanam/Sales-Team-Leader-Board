import "./App.css";
import TeamsSales from "./Components/Teams/TeamsSales";
import LeaderBoardThisYear from "./Components/Teams/LeaderBoardThisYear";
import WeeklySales from "./Components/Teams/WeeklySales";
import Individuals from "./Components/Individuals/Individuals";
import Bottom from "./Components/Bottom/Bottom";

function App() {
  return (
    <div className="main-grid-container">
      <div className="grid-container">
        <div className="teams-grid">
          <TeamsSales />
          <LeaderBoardThisYear />
          <WeeklySales />
        </div>
        <div className="individual-grid">
          <Individuals />
          <Individuals />
          <Individuals />
          <Individuals />
        </div>
      </div>
      <div className="bottom-grid-container">
        <Bottom />
      </div>
    </div>
  );
}

export default App;
