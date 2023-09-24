import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../images/logo_1.png";
import signupimg from "../../images/signup.jpg";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigator = useNavigate();

  const signup = () => {
    const { username, email, password } = user;
    if (username && email && password) {
      // axios.post("http://localhost:9002/signup", user).then((res) => {
      //   alert(res.data.message);
      //   navigator("/login");
      // });
      axios.all([
        axios.post("http://localhost:9002/signup", user).then((res) => {
          alert(res.data.message);
          navigator("/login");
        }),
        axios
          .post("https://codebrew.up.railway.app/signup", user)
          .then((res) => {
            alert(res.data.message);
            navigator("/login");
          }),
      ]);
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src={signupimg} alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create an Account</h2>
          <input
            type="text"
            name="username"
            value={user.username}
            className={styles.input}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={user.email}
            className={styles.input}
            placeholder="Email"
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
          <button className={styles.btn} onClick={signup}>
            Sign Up
          </button>
          <p className={styles.text}>
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
