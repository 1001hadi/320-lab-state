export const Score = ({ scoreInfo }) => {
  // display learner is Score data on p tag
  //   console.log(scoreInfo.date);

  return (
    <>
      <p>Data: {scoreInfo.date}</p>
      <p>Score: {scoreInfo.score}</p>
    </>
  );
};
