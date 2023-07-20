import styles from "./ChooseAndPlay.module.css";
import {
  FaRegHandPaper,
  FaRegHandRock,
  FaRegHandScissors,
} from "react-icons/fa";

const ChooseAndPlay = () => {
  return (
    <>
      <div className={styles.chooseContainer}>
        <div className={styles.chooseBtnWrapper}>
          <button className={`${styles.chooseBtn} ${styles.bounce}`}>
            <FaRegHandRock size={40} />
            Rock
          </button>
          <button className={`${styles.chooseBtn} ${styles.bounce}`}>
            <FaRegHandPaper size={40} />
            Paper
          </button>
          <button className={`${styles.chooseBtn} ${styles.bounce}`}>
            <FaRegHandScissors size={40} />
            Scissors
          </button>
        </div>
        <button className={styles.playBtn}>PLAY!</button>
      </div>
    </>
  );
};

export default ChooseAndPlay;
