import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ForestCard.module.css";
import Drawing from "./Drawing";

const ForestCard = ({ forest }) => {
  return (
    <article className={styles.card}>
      <div className={styles.drawingPreviewScale}>
      <div className={styles.drawingPreview}>
      <Drawing {...forest.attributes.parameters.parameters} />
      </div>
      </div>
      <p>{forest.attributes.parameters.parameters.season} forest by <Link to={`/user/${forest.owner.data.id}`}>
        {forest.owner.data.attributes.username}
      </Link></p>
    </article>
  );
};

ForestCard.propTypes = {
  forest: PropTypes.object.isRequired,
};

export default ForestCard;
