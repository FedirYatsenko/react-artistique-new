import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Index = () => {
  return (
      <div className={styles.heroContainer}>
      <h2 className={styles.title}>Forest generator</h2>
      <p className={styles.subtitle}>Create your own forest with just a few clicks and share it with the world in our image gallery</p>
      <div className={styles.buttonsContainer}>
        <Link to="/forest/create" className={`${styles.button} ${styles.buttonPrimary}`}>
          Create a forest
        </Link>
        <Link to="/gallery" className={styles.button}>
          Forests gallery
        </Link>
      </div>
    </div>
  );
};

export default Index;
