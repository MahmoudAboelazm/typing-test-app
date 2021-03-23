import "./Result.css";
const Result = ({ correctWords, wrongWords, wpm, restart }) => (
  <div className="result-container">
    <div className="result-wrapper">
      <div className="result">
        <div className="result-details">
          <div className="wpm">
            <p>
              Your speed is <span>{wpm} wpm</span>
            </p>
          </div>
          <div className="details">
            <p style={{ color: "green" }}>Correct Words {correctWords}</p>
            <p style={{ color: "red" }}>Wrong Words {wrongWords}</p>
          </div>
        </div>
        <div className="restart">
          <button onClick={restart}>Try again</button>
        </div>
      </div>
    </div>
  </div>
);

export default Result;
