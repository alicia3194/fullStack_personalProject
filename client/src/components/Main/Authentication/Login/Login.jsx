import React, { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import "./Login.css";
import "../Authentication.css";

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
        "Authorization": `Bearer ${localStorage.getItem("token") || ""}`,
      },
      body: JSON.stringify({ email, password}),
    });
    const data = await res.json();
    console.log("Respuesta del servidor después de iniciar sesión:", data);

    if (res.ok) {

      const userId = data.user.user_id; // Modificación aquí
      console.log("userId después de iniciar sesión:", userId);
    
      // Asegúrate de que el objeto user tenga la propiedad user_id
      const userData = { user_id: userId };
    
      // Genera el token y muestra su contenido
      const token = data.token;
      console.log("Token después de iniciar sesión:", token);
    
      loginUser(userData);
      onLogin(userData);

      // localStorage.setItem("token", data.token);

    } else {
      if (data.error === "Usuario incorrecto") {
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
