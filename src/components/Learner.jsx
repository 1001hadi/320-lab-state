import { Score } from "./Score";

export const Learner = ({ learner }) => {
  // display the learner name, bio in jsx tag
  //  map over scores data to collect score and the date
  //   console.log(learner.name);
  // map function moved to variable after dylan lecture
  let mapScores = learner.scores.map((score, i) => (
    <Score key={i} scoreInfo={score} />
  ));
  return (
    <div className="learner">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <h4>Scores:</h4>
      {mapScores}
    </div>
  );
};
