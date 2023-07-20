import ScoreAndResults from "./components/ScoreAndResults/ScoreAndResults";
import ChooseAndPlay from "./components/ChooseAndPlay/ChooseAndPlay";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Rock, Paper, Scissors</h1>
      </div>
      <ScoreAndResults />
      <ChooseAndPlay />
    </div>
  );
}

export default App;
