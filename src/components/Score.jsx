export const Score = ({ scoreInfo }) => {
  // display learner is Score data on p tag
  return (
    <>
      <p>Data: {scoreInfo.data}</p>
      <p>Score: {scoreInfo.score}</p>
    </>
  );
};
