import PropTypes from "prop-types";
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
      <p><span className={styles.capitalize}>{forest.attributes.parameters.parameters.season}</span> forest by {forest.owner.data.attributes.username}</p>
    </article>
  );
};

ForestCard.propTypes = {
  forest: PropTypes.object.isRequired,
};

export default ForestCard;
