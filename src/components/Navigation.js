import { Link, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useContext } from "react";
import { AuthContext } from "../store/UserAuthContext";
import logo1 from "../components/logo1.png"


const Navigation = () => {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const logoutUser = () => {
    logout();
    navigate('/')
  };
  return (
    <div className="container">
      <header className={styles.header}>
        <Link to="/dashboard" className={styles.logo}>
        <img src={logo1} alt="logo" />
        </Link>

        <div className={styles.menu}>
          <p>Hello {user.username}</p>

          <Link to="/dashboard/nested">Check Result</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
