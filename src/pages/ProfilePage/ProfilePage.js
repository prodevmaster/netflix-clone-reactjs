import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import "./ProfilePage.css";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.user.user);
  const logoutHandler = () => {
    signOut(auth);
  };
  return (
    <div className="profilePage">
      <div className="profilePage__header">
        <h1>Profile</h1>
        <div>
          <h2>User</h2>
          <h3>{user.email}</h3>
        </div>
        <div>
          <h2>Plan</h2>
          <h3>Test Mode</h3>
        </div>
      </div>
      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
