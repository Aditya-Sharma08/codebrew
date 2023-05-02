import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../images/logo_1.png";
import loginimg from "../../images/login.jpg";
import axios from "axios";

function Login({ setLoginUser }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("https://codebrew.up.railway.app/login", user).then((res) => {
      // alert(res.data.message);
      setLoginUser(res.data.user);
      navigator("/");
    });
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src={loginimg} alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Welcome to CodeBrew!</h2>
          <input
            type="text"
            className={styles.input}
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button className={styles.btn} onClick={login}>
            Log In
          </button>
          <p className={styles.text}>
            Don't have an Account ? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
