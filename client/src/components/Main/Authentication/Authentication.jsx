import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./Authentication.css";

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailEmpty = email.trim() === '';
  const isPasswordEmpty = password.trim() === '';

  return (
    <div className="authentication-container">
      <header>
        <h1>Tu Aplicación</h1>
      </header>

      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Agregar el formulario dentro del componente Authentication */}
        <FloatingLabel controlId="email" label="Correo Electrónico">
          <Form.Control
            type="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={isEmailEmpty ? 'empty-input' : ''}
          />
        </FloatingLabel>

        <FloatingLabel controlId="password" label="Contraseña">
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={isPasswordEmpty ? 'empty-input' : ''}
          />
        </FloatingLabel>

        <div className="mt-3">
          <Link to="/login" className="btn btn-primary">
            Iniciar Sesión
          </Link>
        </div>
      </main>

      <nav>
        <Link to="/login" className="auth-button">
          Wof-in
        </Link>
        <Link to="/signup" className="auth-button">
          Sign-Paw
        </Link>
      </nav>
    </div>
  );
};

export default Authentication;
