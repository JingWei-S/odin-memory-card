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

  useEffect(() => {
    const changeGameState = () => {
      if (score > 5) {
        setGameState(false);
      }
    };

    document.addEventListener("click", changeGameState);
  });

  useEffect(() => {
    const updateBest = () => {
      if (gameState === false) {
        setBest(score)
        setGameState(true)
      }
    };

    updateBest();
  })

  return (
    <div className="App">
      <p>Current Score: {score}</p>
      <button onClick={incrementScore}>Click me to add score</button>
      <p>Best Score: {best}</p>
      <p>Game Status: {String(gameState)}</p>
      <CardDisplay/>
    </div>
    
  );
}

export default App;
