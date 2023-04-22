import { useEffect, useState } from "react";
import "./App.css";
import CardDisplay from "./Components/CardDisplay";

function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [gameState, setGameState] = useState(true);
  const [images, setImages] = useState([
    { src: "/img/img1.png", clicked: false },
    { src: "/img/img2.png", clicked: false },
    { src: "/img/img3.png", clicked: false },
    { src: "/img/img4.png", clicked: false },
    { src: "/img/img5.png", clicked: false },
    { src: "/img/img6.png", clicked: false },
    { src: "/img/img7.png", clicked: false },
    { src: "/img/img8.png", clicked: false },
    { src: "/img/img9.png", clicked: false },
    { src: "/img/img10.png", clicked: false },
    { src: "/img/img11.png", clicked: false },
    { src: "/img/img12.png", clicked: false },
  ]);

  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const stopGame = () => {
    setGameState(false);
  };

  const restartGame = () => {
    setGameState(true);
    // also need to reset the image state
    setImages(shuffleArray([
      { src: "/img/img1.png", clicked: false },
      { src: "/img/img2.png", clicked: false },
      { src: "/img/img3.png", clicked: false },
      { src: "/img/img4.png", clicked: false },
      { src: "/img/img5.png", clicked: false },
      { src: "/img/img6.png", clicked: false },
      { src: "/img/img7.png", clicked: false },
      { src: "/img/img8.png", clicked: false },
      { src: "/img/img9.png", clicked: false },
      { src: "/img/img10.png", clicked: false },
      { src: "/img/img11.png", clicked: false },
      { src: "/img/img12.png", clicked: false },
    ]));
  };

  useEffect(() => {
    if (!gameState) {
      if (score > best) {
        setBest(score);
      }
      setScore(0);
    }
  });

  return (
    <div className="App">
      <div className="score">
        <p>Current Score: {score}</p>
        <p>Best Score: {best}</p>
        {!gameState ? <button onClick={restartGame}>Restart</button> : <></>}
      </div>
      <div className="instruction">Get points for choosing a card, but don't click on the same card more than once 👻</div>
      <CardDisplay
        incrementScore={incrementScore}
        stopGame={stopGame}
        gameState={gameState}
        images={images}
        setImages={setImages}
        shuffleArray={shuffleArray}
      />
      <div className="footer">
        <p>Team Work by Jing and Dall-E 2 🍪</p>
      </div>
    </div>
  );
}

export default App;
