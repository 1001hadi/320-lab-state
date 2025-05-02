import "./App.css";
import learnerArr from "./utilities/data.js";
import { useState } from "react";
import { Learner } from "./components/Learner.jsx";

function App() {
  const [learnerInfo, setLearnerInfo] = useState(learnerArr);
  // map function moved to variable after dylan lecture
  let mapedData = learnerInfo.map((learner, i) => (
    <Learner key={i} learner={learner} />
  ));

  return (
    // map over the state(learnerInfo) and display learner in Learner component
    <>
      <div className="main-container">
        <h1>Learners Info Display</h1>
        <div className="learner-section">{mapedData}</div>
      </div>
    </>
  );
}

export default App;
