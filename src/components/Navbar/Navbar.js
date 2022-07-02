import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = ({ auth }) => {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <nav className={`navbar ${show && "nav_black"}`}>
      <NavLink to="/">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="navbar__lefticon"
        />
      </NavLink>
      {auth && (
        <NavLink to="/profile">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
            className="navbar__righticon"
          />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
