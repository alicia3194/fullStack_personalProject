import React, { useState } from "react";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import { useUser } from "../../../useContext/UserContext";

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);
  const { user, loginUser} = useUser();

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (userData) => {
    loginUser(userData);
  };

  return (
    <div>
      {user ? (
        <>
          <p>¡Bienvenido {user.email}! Encuentra los mejores lugares pet friendly para disfrutar junto a tu peludo compañero.</p>
        </>
      ) : (
        <>
          {showLogin ? <Login onLogin={handleLogin} /> : <Signup onLogin={handleLogin} />}
          <button onClick={toggleForm}>
            {showLogin ? "Sign up" : "Login"}
          </button>
        </>
      )}
    </div>
  );
};

export default Home;