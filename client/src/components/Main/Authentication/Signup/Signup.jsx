import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../context/UserContext"; 
import "./Signup.css"
import "../Authentication.css"

const Signup = () => {
  const { register, handleSubmit, formState: { errors, isSubmitted }, reset } = useForm();
  const { loginUser } = useUser();

  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = async (data) => {
    if (!data.email || !data.name || !data.password) {
      setEmailError(!data.email);
      setNameError(!data.name);
      setPasswordError(!data.password);
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
        loginUser(responseData.user);
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }

    reset();
  };

  return (
    <section className="signup-form">
      <h2 className="h2-signup">Sign up</h2>
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
          Sign up
        </button>
      </form>
    </section>
  );
};

export default Signup;