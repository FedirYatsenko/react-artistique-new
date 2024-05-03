import { Link, useLoaderData } from "react-router-dom";
import { getForests } from "../services/forest";
import ForestCard from "../components/ForestCard";
import styles from "./gallery.module.css";
import plus from '../assets/images/plus.png';

const loader = async () => {
  const forests = await getForests();
  return { forests };
};

const Gallery = () => {
  const { forests } = useLoaderData();
  return (
    <div className={styles.wrapper}>
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
          <h2 className={styles.title}>Gallery</h2>
          <p>Share yours and view others generated forests</p>
        </div>
      <div className={styles.buttonsContainer}>
        <Link to="/forest/create">
          <img src={plus} alt="plus" className={styles.add} />
          <p className={styles.textAdd}>Create your own forest</p>
        </Link>
      </div>
    </div>
    <ul className={styles.list} id="gallery">
      {[...forests].reverse().map((forest) => (
        <li key={forest.id}>
          <Link to={`/forest/${forest.id}`}>
            <ForestCard forest={forest} />
          </Link>
        </li>
      ))}
    </ul>
    </div>
  );
};

Gallery.loader = loader;

export default Gallery;