import styles from "./ScoreAndResults.module.css";
import { FaRegHandRock } from "react-icons/fa";

const ScoreAndResults = () => {
  return (
    <>
      <div className={styles.scoreContainer}>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>PLAYER</p>
        </div>
        <div className={styles.score}>
          <h3>Score</h3>
          <p>COMPUTER</p>
        </div>
      </div>
      <div className={styles.results}>
        <div className={styles.playerHand}>
          <FaRegHandRock size={40} />
          <p>Rock</p>
        </div>
        <div className={styles.midCol}>
          <p className={styles.resultsWinner}>Winner: Player</p>
          <p className={styles.resultsMessage}>Rock beats scissors</p>
        </div>
        <div className={styles.computerHand}>
          <FaRegHandRock size={40} />
          <p>Rock</p>
        </div>
      </div>
    </>
  );
};

export default ScoreAndResults;
