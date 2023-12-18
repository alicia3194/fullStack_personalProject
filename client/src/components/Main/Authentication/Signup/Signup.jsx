import React, { useState } from "react";
import { useUser } from "../../../../context/UserContext";
import { FloatingLabel, Form } from "react-bootstrap";
import "../Authentication.css";

const Signup = () => {
  const { loginUser } = useUser();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !name || !password) {
      setEmailError(!email);
      setNameError(!name);
      setPasswordError(!password);
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      const responseData = await res.json();

      if (res.ok) {
        loginUser(responseData.user);
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }
  };

  return (
    <section className="signup-form">
      <h2 className="h2-signup">Registro con Huella</h2>
      <Form className="new" onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="email"
          label="Email:"
          className={`label-signup ${emailError ? 'error' : ''}`}
        >
          <Form.Control
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`input-signup ${emailError ? 'error' : ''}`}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="name"
          label="Name:"
          className={`label-signup ${nameError ? 'error' : ''}`}
        >
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`input-signup ${nameError ? 'error' : ''}`}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="password"
          label="Password:"
          className={`label-signup ${passwordError ? 'error' : ''}`}
        >
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input-signup ${passwordError ? 'error' : ''}`}
          />
        </FloatingLabel>

        <button className="auth-button" type="submit">
          Sign-Paw
        </button>
      </Form>
    </section>
  );
};

export default Signup;
