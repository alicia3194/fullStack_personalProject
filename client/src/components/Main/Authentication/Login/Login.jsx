import React, { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import "../Authentication.css";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
      <h2 className="h2-login">Entrada a destinos PetFriendly</h2>
      <Form className="new" onSubmit={handleSubmit}>
        <FloatingLabel controlId="email" label="Email:" className={`label-login ${emailError ? 'error' : ''}`}>
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input-login ${emailError ? 'error' : ''}`}
          />
        </FloatingLabel>

        <FloatingLabel controlId="password" label="Password:" className={`label-login ${passwordError ? 'error' : ''}`}>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input-login ${passwordError ? 'error' : ''}`}
          />
        </FloatingLabel>
        <p>¿Sin huella? ¡Regístrate!</p>
        <button className="auth-button" type="submit">
          Woof-In
        </button>
      </Form>
    </section>
  );
};

export default Login;
