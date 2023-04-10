import { useEffect, useState } from "react";
import "./App.css";
import CardDisplay from "./Components/CardDisplay";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameState, setGameState] = useState(true);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const stopGame = () => {
    setGameState(false);
  };

  useEffect(() => {
    if (!gameState) {
      if (score > best) {
        setBest(score);
      }
      setScore(0);
    }
  });
  // useEffect(() => {
  //   const changeGameState = () => {
  //     if (score > 5) {
  //       setGameState(false);
  //     }
  //   };
  //   document.addEventListener("click", changeGameState);
  // });

  // here is how I implement the game on logic
  // useEffect(() => {
  //   const updateBest = () => {
  //     if (gameState === false) {
  //       setBest(score)
  //       setGameState(true)
  //     }
  //   };

  //   updateBest();
  // });

  return (
    <div className="App">
      <p>Current Score: {score}</p>
      <p>Best Score: {best}</p>
      <p>Game Status: {String(gameState)}</p>
      <CardDisplay incrementScore={incrementScore} stopGame={stopGame} />
    </div>
  );
}

export default App;
