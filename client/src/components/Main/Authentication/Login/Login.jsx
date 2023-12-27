import React, { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import "./Login.css";
import "../Authentication.css";
// import Parallax from '../../../../styles/Parrallax/Parallax';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { loginUser } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setEmailError(false);
    setPasswordError(false);
  
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
      } else {
        if (data.error === "Usuario no encontrado") {
          setEmailError(true);
        } else if (data.error === "Contraseña incorrecta") {
          setPasswordError(true);
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };
  

  return (
    <section className="login-form">
      <h2 className="h2-login">Entrada a destinos PetFriendly</h2>
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
          Woof-In
        </button>
        <p>¿Sin huella? ¡Regístrate!</p>
      </form>
    </section>
  );
};

export default Login;
