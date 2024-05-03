import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import AuthStatus from "./AuthStatus";
import logo from '../assets/images/logo.svg';

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.visuallyHidden}>Forest Generator</h1>
      <div className={styles.navbar}>
        <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <Link to="/forest/create" className={styles.navbutton}>
        CREATE A FOREST
        </Link>
        <Link to="/gallery" className={styles.navbutton}>
        FORESTS GALLERY
        </Link>
        </div>
        <AuthStatus />
    </div>
  );
};

export default Header;
