import React, { useState } from "react";
import { useUser } from "../../../../useContext/UserContext";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUser } = useUser(); // obtener login

  const handleSubmit = async (e) => {
    e.preventDefault();

    //iniciar sesión
    try {
      const res = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data); 

      if (res.ok) {
        loginUser(data.user); // para usar loginUser desde el contexto
        onLogin(data.user); // llama a onLogin con los datos del usuario
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <section>
      <h2>Log in</h2>
      <form className="new" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log in</button>

      </form>
    </section>
  );
};

export default Login;
