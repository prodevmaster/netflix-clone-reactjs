import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import "./RegisterPage.css";
const RegisterPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password).catch(() => {
      alert("you cannot signup");
    });
  };
  return (
    <div className="registerPage">
      <h1>Register</h1>
      <form onSubmit={submitHandler} className="registerPage__form">
        <input type="email" placeholder="Email" required ref={emailRef} />
        <input
          type="password"
          placeholder="Password"
          required
          ref={passwordRef}
        />
        <p>
          Have an account?{" "}
          <Link to="/login" className="loginPage_lnk">
            Login
          </Link>
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
