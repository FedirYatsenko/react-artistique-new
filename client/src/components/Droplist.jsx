import PropTypes from "prop-types";
import styles from "../routes/createForest.module.css";

const Droplist = ({ onValueChange, value }) => {
    return (
        <select
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            className={styles.forms_droplist}
        >
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
        </select>
    );
};
    
Droplist.propTypes = {
    onValueChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Droplist;