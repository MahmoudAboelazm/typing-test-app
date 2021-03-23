import "./Words.css";
const Words = ({
  arrayWords,
  doneWords,
  currentIndex,
  validateLetters,
  inputValue,
  nextWords,
}) => {
  return (
    <div className="words">
      {arrayWords.map((word, index) => (
        <span
          key={index}
          className={`word ${
            doneWords[index]
              ? doneWords[index] === word
                ? "correct-Word"
                : "wrong-word"
              : ""
          }`}
        >
          {word}
          {index === currentIndex && (
            <div className="validate-letter">
              {validateLetters.map((letter, index) => (
                <span
                  key={index}
                  className={`${
                    inputValue[index]
                      ? inputValue[index] === letter
                        ? "correct-letter"
                        : "wrong-letter"
                      : ""
                  }`}
                >
                  {letter}
                </span>
              ))}
            </div>
          )}
        </span>
      ))}
      <div>
        {nextWords.map((word, index) => (
          <span key={index} className="word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Words;
