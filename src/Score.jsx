const Score = (props) => {
  return ( 
    <div>
      {props.scores.map((scores, idx) => 
        <div key={idx}>
          Date: {scores.date} <br />
          Scores: {scores.score} <br /><br />
        </div>
      )}
    </div>
  );
}

export default Score;