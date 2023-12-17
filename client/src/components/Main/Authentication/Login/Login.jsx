import React, { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import "./Login.css";
import "../Authentication.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {

      setEmailError(!email);
      setPasswordError(!password);
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        loginUser(data.user);
        onLogin(data.user);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error("Error al iniciar sesión:", error);
    }
  };


  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  return (
    <section className="login-form">
      <h2 className="h2-login">Log in</h2>
      <form className="new" onSubmit={handleSubmit}>
        <label className={`label-login ${emailError ? 'error' : ''}`}>Email:</label>
        <input
          className={`input-login ${emailError ? 'error' : ''}`}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className={`label-login ${passwordError ? 'error' : ''}`}>Password:</label>
        <input
          className={`input-login ${passwordError ? 'error' : ''}`}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button className="auth-button" type="submit">
          Log in
        </button>
      </form>
    </section>
  );
};

export default Login;