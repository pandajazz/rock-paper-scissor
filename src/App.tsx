import { useEffect, useState } from "react";
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";
import styles from "./App.module.css";

function App() {
  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [results, setResults] = useState({
    winner: "",
    message: "",
  });
  const [score, setScore] = useState({
    player: 0,
    computer: 0,
  });

  const options = [
    { name: "rock", icon: <FaRegHandRock size={40} /> },
    { name: "paper", icon: <FaRegHandPaper size={40} /> },
    { name: "scissors", icon: <FaRegHandScissors size={40} /> },
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const play = () => {
    if (
      (options[playerHand].name === "rock" &&
        options[computerHand].name === "rock") ||
      (options[playerHand].name === "paper" &&
        options[computerHand].name === "paper") ||
      (options[playerHand].name === "scissors" &&
        options[computerHand].name === "scissors")
    ) {
      setResults({ winner: "No one!", message: "This is a draw" });
    } else if (
      options[playerHand].name === "rock" &&
      options[computerHand].name === "paper"
    ) {
      setResults({ winner: "Computer", message: "Rock beats Paper" });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (
      options[playerHand].name === "rock" &&
      options[computerHand].name === "scissors"
    ) {
      setResults({ winner: "Player", message: "Rock beats Scissors" });
      setScore({ ...score, player: score.player + 1 });
    } else if (
      options[playerHand].name === "paper" &&
      options[computerHand].name === "rock"
    ) {
      setResults({ winner: "Player", message: "Paper beats Rock" });
      setScore({ ...score, player: score.player + 1 });
    } else if (
      options[playerHand].name === "paper" &&
      options[computerHand].name === "scissors"
    ) {
      setResults({ winner: "Computer", message: "Scissors beats Paper" });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (
      options[playerHand].name === "scissors" &&
      options[computerHand].name === "rock"
    ) {
      setResults({ winner: "Computer", message: "Rock beats Scissors" });
      setScore({ ...score, computer: score.computer + 1 });
    } else if (
      options[playerHand].name === "scissors" &&
      options[computerHand].name === "paper"
    ) {
      setResults({ winner: "Player", message: "Scissors beats Paper" });
      setScore({ ...score, player: score.player + 1 });
    }
  };

  useEffect(() => {
    if (runTimer && timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else if (runTimer && timer < 1) {
      setRunTimer(false);
      setTimer(3);
      play();
    }
  }, [runTimer, timer, play]);

  const selectOption = (handIndex: number) => {
    setResults({ winner: "", message: "" });
    setPlayerHand(handIndex);
  };

  const generateComputerHand = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    setComputerHand(randomNumber);
  };

  const handleStart = () => {
    setResults({ winner: "", message: "" });
    setRunTimer(true);
    generateComputerHand();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Rock, Paper, Scissors</h1>
      </div>
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Score: {score.player}</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>Score: {score.computer}</p>
        </div>
      </div>
      <div className={styles.results}>
        <div
          className={`${styles.playerHand} ${
            results.winner === "Player" ? styles.winnerAnimation : ""
          }`}
        >
          {runTimer && (
            <div className={styles.playerShake}>{options[0].icon}</div>
          )}
          {results?.winner && (
            <>
              {options[playerHand].icon}
              <p>{options[playerHand].name}</p>
            </>
          )}
        </div>
        <div className={styles.midCol}>
          {runTimer && <p className={styles.timer}>{timer}</p>}
          {results?.winner && (
            <>
              <p className={styles.resultsWinner}>Winner: {results.winner}</p>
              <p className={styles.resultsMessage}>{results.message}</p>
            </>
          )}
        </div>
        <div
          className={`${styles.computerHand} ${
            results.winner === "Computer" ? styles.winnerAnimation : ""
          }`}
        >
          {runTimer && (
            <div className={styles.computerShake}>{options[0].icon}</div>
          )}
          {results?.winner && (
            <>
              {options[computerHand].icon}
              <p>{options[computerHand].name}</p>
            </>
          )}
        </div>
      </div>
      <div className={styles.chooseContainer}>
        <div className={styles.chooseBtnWrapper}>
          <button
            className={`${styles.chooseBtn} ${styles.bounce} ${
              playerHand === 0 ? styles.active : ""
            }`}
            onClick={() => selectOption(0)}
          >
            <FaRegHandRock size={40} />
            <span>Rock</span>
          </button>
          <button
            className={`${styles.chooseBtn} ${styles.bounce} ${
              playerHand === 1 ? styles.active : ""
            }`}
            onClick={() => selectOption(1)}
          >
            <FaRegHandPaper size={40} />
            <span>Paper</span>
          </button>
          <button
            className={`${styles.chooseBtn} ${styles.bounce} ${
              playerHand === 2 ? styles.active : ""
            }`}
            onClick={() => selectOption(2)}
          >
            <FaRegHandScissors size={40} />
            <span>Scissors</span>
          </button>
        </div>
        <button className={styles.playBtn} onClick={handleStart}>
          PLAY!
        </button>
      </div>
    </div>
  );
}

export default App;
