import React, { useState } from "react";
import "./App.css";
import NumberTable from "./components/NumberTable";
import Rules from "./components/Rules";
import WinningPoints from "./components/WinningPoints";
import { tambolaNumbers } from "./Constants";

function App() {
  const [numbersCalled, setNumbersCalled] = useState([]);
  const [currentNumber, setCurrentNumber] = useState(null);
  const [gameEnd, setGameEnd] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const callNumber = () => {
    // Generate a random number between 1 and 90 (or your desired range)
    const randomNumber = Math.floor(Math.random() * 90) + 1;

    if (!numbersCalled.includes(randomNumber)) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 4000); // Hide the div for 5 seconds
      setCurrentNumber(randomNumber);
      setNumbersCalled([...numbersCalled, randomNumber]);
    } else if (numbersCalled.length === 90) {
      setGameEnd("Game Over");
      numbersCalled.length = 0;
    } else {
      callNumber();
    }
  };

  return (
    <div className="container">
      <header className="header">T@Mb()|_A</header>
      <button onClick={callNumber} className="call-button">
        Call Number
      </button>
      <div>
        {currentNumber && (
          <div
            className={`currentNumberAndName ${
              isVisible ? "visible" : "hidden"
            }`}
          >
            <div className="currentName">{tambolaNumbers[currentNumber]}</div>
            <div className="currentNumber">
              {currentNumber < 10 ? `0${currentNumber}` : currentNumber}
            </div>
          </div>
        )}
      </div>
      <div>{gameEnd}</div>
      <div className="gameBoard">
        <Rules />
        <NumberTable numbersCalled={numbersCalled} />
        <WinningPoints />
      </div>
    </div>
  );
}

export default App;
