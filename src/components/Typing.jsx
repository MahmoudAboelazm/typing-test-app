import React, { useState, useEffect } from "react";
import { arr } from "../wordsGenerator";
import Header from "./Header/Header";
import Input from "./Input/Input";
import Result from "./Result/Result";
import Words from "./Words/Words";

const random = Math.floor(Math.random() * 100);

const Typing = () => {
  // States
  const [arrayWords, setArrayWords] = useState(arr.slice(random, random + 7));
  const [nextWords, setnextWords] = useState(
    arr.slice(random + 7, random + 14)
  );

  const [inputValue, setinputValue] = useState("");
  const [currentIndex, setcurrentIndex] = useState(0);

  const [correctWordsNumber, setcorrectWordsNumber] = useState(0);
  const [wrongWordsNumber, setwrongWordsNumber] = useState(0);

  const [validateLetters, setValidateLetters] = useState([]);
  const [doneWords, setdoneWords] = useState([]);

  const [countDown, setcountDown] = useState(60);
  const [wpm, setwpm] = useState(0);

  /// Adding an array to validate the letters of the word 0
  if (currentIndex === 0 && validateLetters.length === 0) {
    const word = arrayWords[currentIndex];
    const wordLength = word.length;
    const newLetters = [];
    for (let i = 0; i < wordLength; i++) {
      newLetters.push(word[i]);
    }
    setValidateLetters(newLetters);
  }
  //////////// Target the input value
  const getTheInputValue = (e) => {
    let currentValue = e.target.value;
    setinputValue(currentValue);

    let letterIndex = currentValue.length - 1;
    if (currentValue[letterIndex] === " ") {
      setinputValue("");
      if (countDown !== 0) validateTheWord();
    } else {
      if (countDown === 60) setTimeout(() => setcountDown(countDown - 1), 1000);
    }
  };

  ///////////// Validate the word
  const validateTheWord = () => {
    let temp = arrayWords[currentIndex];
    if (temp && inputValue.trim() !== "") {
      if (inputValue === temp) {
        setcorrectWordsNumber(correctWordsNumber + 1);
      } else {
        setwrongWordsNumber(wrongWordsNumber + 1);
      }

      setcurrentIndex(currentIndex + 1);

      const addDone = [...doneWords, inputValue];
      setdoneWords(addDone);

      /// Adding new array to validate the letters of the next word
      const word = arrayWords[currentIndex + 1];
      if (word) {
        const newLetters = word.split("");
        setValidateLetters(newLetters);
      }
    }
    // Reset some states if the displayed words ended
    if (currentIndex === 6) {
      const number = correctWordsNumber + wrongWordsNumber + random;
      const newNext = arr.slice(number + 8, number + 15);
      setArrayWords(nextWords);
      setnextWords(newNext);
      setcurrentIndex(0);
      setValidateLetters([]);
      setdoneWords([]);
    }
    wpmDisplay();
  };
  /////////// Count down
  useEffect(() => {
    if (countDown !== 60 && countDown !== 0) {
      setTimeout(() => setcountDown(countDown - 1), 1000);
    } else {
      wpmDisplay();
    }
  }, [countDown]);
  ////// Display the wpm
  const wpmDisplay = () => {
    if (correctWordsNumber > 0) {
      const seconds = 60 - countDown;
      const wpm = (correctWordsNumber * 60) / seconds;
      setwpm(Math.ceil(wpm));
    }
  };
  const restart = () => {
    window.location.reload();
  };
  return (
    <div className="typing">
      <Header wpm={wpm} countDown={countDown} />
      <Words
        arrayWords={arrayWords}
        nextWords={nextWords}
        currentIndex={currentIndex}
        doneWords={doneWords}
        inputValue={inputValue}
        validateLetters={validateLetters}
      />
      <Input inputValue={inputValue} getTheInputValue={getTheInputValue} />
      {countDown === 0 && (
        <Result
          wpm={wpm}
          restart={restart}
          correctWords={correctWordsNumber}
          wrongWords={wrongWordsNumber}
        />
      )}
    </div>
  );
};

export default Typing;
