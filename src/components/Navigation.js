import { Link, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import { AuthContext } from "../store/UserAuthContext";


const Navigation = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const logoutUser = () => {
    logout();
    navigate('/')
  };
  return (
    <>
      <header className={styles.header}>
        <Link to="/dashboard" className={styles.logo}>
          JEYOD's Academy
        </Link>

        <div className={styles.menu}>
          <p>Hello {user.username}</p>

          <Link to="/dashboard/nested">Check Result</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </header>
    </>
  );
};

export default Navigation;
