import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./LoginPage.css";
const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(auth, email, password).catch((e) => {
      console.log(e.message);
    });
  };
  return (
    <div className="loginPage">
      <h1>Login</h1>
      <form onSubmit={submitHandler} className="loginPage__form">
        <input type="email" placeholder="Email" required ref={emailRef} />
        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <p>
          Dont have an account?{" "}
          <Link to="/register" className="registerPage_lnk">
            Register
          </Link>
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default RegisterPage;
