import { Link, useRouteLoaderData } from "react-router-dom";
import styles from "./Header.module.css";
import { FaUser } from "react-icons/fa";

const AuthStatus = () => {
  let { user } = useRouteLoaderData("root");

  return (
    <div className={styles.buttonContainer}>
      {user ? (
        <Link className={styles.profile} to="/auth/profile">
        <FaUser />
      </Link>
      ) : (
        <>
        <Link className={`${styles.navbutton}`} to="/auth/register">
          SIGN UP
        </Link>
        <Link className={`${styles.button} ${styles.buttonPrimary}`} to="/auth/login">
          LOG IN
        </Link>
      </>
      )}
    </div>
  );
};

export default AuthStatus;
