import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./Authentication.css";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Routes>
        <Route path="/login" element={<Login />} />//acción para logearse
        <Route path="/signup" element={<Signup />} />//acción para resitrarse
      </Routes>
      <div className="auth-buttons">
        <Link to="/login" className="auth-button">//boton que te manda a logearte
          Wof-in
        </Link>
        <Link to="/signup" className="auth-button">//boton que te manda para registrate
          Sign-Paw
        </Link>
      </div>
    </div>
  );
};

export default Authentication;