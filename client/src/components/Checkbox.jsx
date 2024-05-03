import PropTypes from "prop-types";
import styles from "../routes/createForest.module.css";

const Checkbox = ({ onValueChange, value,}) => {
    return (
        <input
        type="checkbox"
        className={styles.forms_checkbox}
        checked={value}
        onChange={(e) => onValueChange(e.target.checked)}
        />
        );
    };
    
    Checkbox.propTypes = {
        onValueChange: PropTypes.func.isRequired,
        value: PropTypes.bool.isRequired,
    };
    
    export default Checkbox;
    