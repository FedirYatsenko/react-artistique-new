import PropTypes from "prop-types";
import styles from "../routes/createForest.module.css";

const Slider = ({ onValueChange, value, max, min = 0}) => {
    return (
        <label className={styles.forms_long}>
        <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(parseInt(e.target.value, 10))}
        />
        </label>
        );
    };
    
    Slider.propTypes = {
        onValueChange: PropTypes.func.isRequired,
        value: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        min: PropTypes.number,
    };
    
    export default Slider;
    