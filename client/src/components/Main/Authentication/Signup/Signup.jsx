import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../context/UserContext"; 
import "./Signup.css";
import "../Authentication.css";

const Signup = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted }, reset } = useForm();
  const { loginUser } = useUser();

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    if (!data.email || !data.name || !data.password) {
      setErrorMessage("Por favor, complete todos los campos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();

      if (res.ok) {
        localStorage.setItem("token", responseData.token);

        loginUser(responseData.user);
        reset();
      } else {
        if (responseData.error === "El usuario ya esta registrado") {
        } else {
          setErrorMessage("Error al crear usuario. Por favor, inténtelo de nuevo.");
        }
      }
    } catch (error) {
      setErrorMessage("Error al crear usuario. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <section className="signup-form">
      <h2 className="h2-signup">Registro con Huella</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>
        <label className={`label-signup ${isSubmitted && !register("email").value ? 'error' : ''}`}>
          Email:
        </label>
        <input
          className={`input-signup ${isSubmitted && !register("email").value ? 'error' : ''}`}
          type="text"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="error-message"></span>}

        <label className={`label-signup ${isSubmitted && !register("name").value ? 'error' : ''}`}>
          Name:
        </label>
        <input
          className={`input-signup ${isSubmitted && !register("name").value ? 'error' : ''}`}
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="error-message"></span>}

        <label className={`label-signup ${isSubmitted && !register("password").value ? 'error' : ''}`}>
          Password:
        </label>
        <input
          className={`input-signup ${isSubmitted && !register("password").value ? 'error' : ''}`}
          type="text"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="error-message"></span>}
        
        <button className="auth-button" type="submit">
          Sign-Paw
        </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </section>
  );
};

export default Signup;
