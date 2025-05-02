import "./App.css";
import learnerArr from "./data.js";
import { useState } from "react";
import { Learner } from "./components/Learner.jsx";

function App() {
  const [learnerInfo, setLearnerInfo] = useState(learnerArr);

  return (
    // map over the state(learnerInfo) and display learner in Learner component
    <>
      <div className="main-container">
        <h1>Learners Info Display</h1>
        <div className="learner-section">
          {learnerInfo.map((learner, i) => (
            <Learner key={i} learner={learner} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
