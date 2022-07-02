import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login, logout } from "./features/user-slice";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import SimpleBackdrop from "./components/Backdrop/SimpleBackdrop";

import "./App.css";

const App = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const fetchUser = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({ uid: userAuth.uid, email: userAuth.email }));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    });
    return fetchUser;
  }, [dispatch]);

  return (
    <div className="app">
      {isLoading ? (
        <SimpleBackdrop />
      ) : (
        <>
          <Navbar auth={isLoggedIn} />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute auth={isLoggedIn}>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute auth={isLoggedIn}>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
