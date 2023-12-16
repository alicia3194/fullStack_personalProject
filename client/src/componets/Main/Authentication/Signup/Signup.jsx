import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "../../../../useContext/UserContext"; 


const Signup = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { loginUser } = useUser(); 

  const onSubmit = async (data) => {

    //crear usuario
    try {
      const res = await fetch("http://localhost:5001/api/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();
      console.log(responseData);
     

      if (res.ok) {
        loginUser(responseData.user);
      }
    } catch (error) {
      console.error("Error al crear usuario:", error);
    }

    reset();
  };

  return (
    <section>
      <h2>Sign up</h2>
      <form className="new" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input type="text" {...register("email", { required: true })} />
        {errors.email && <span>Required</span>}

        <label htmlFor="name">Name:</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>Required</span>}

        <label htmlFor="password">Password:</label>
        <input type="text" {...register("password", { required: true })} />
        {errors.password && <span>Required</span>}

        <button type="submit">Sign up</button>
      </form>
    </section>
  );
};

export default Signup;