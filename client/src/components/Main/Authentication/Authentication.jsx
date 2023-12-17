import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./Authentication.css";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">
          Wof-in
        </Link>
        <Link to="/signup" className="auth-button">
          Sign-Paw
        </Link>
      </div>
    </div>
  );
};

export default Authentication;