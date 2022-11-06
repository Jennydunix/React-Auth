import { useContext, useState } from "react";
import { AuthContext } from "../store/UserAuthContext";
import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [userDetails, setUserDetails] = useState({});
  const cta = useContext(AuthContext);

  const navigate = useNavigate()

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    cta.login(userDetails);
    navigate('/dashboard')

  };

  return (
    <div className={styles.logincard}>
      <h2>Login</h2>
      <h3 className={{ fontWeight: 800 }}>Enter Your Credentials</h3>
      <form className= {styles.loginform} onSubmit={submitHandler}>
        <input
          type="text"
          id="text"
          name="username"
          onChange={changeHandler}
          placeholder="Username"
          required
        />
        <input
          type="password"
          id="password"
          name="password"
          onChange={changeHandler}
          placeholder="Password"
          required
        />

        <a href="*">Forgot your password?</a>
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
