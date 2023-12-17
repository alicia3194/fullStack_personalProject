import React, { useState } from "react";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import { useUser } from "../../../useContext/UserContext";
import Search from "../Search/Search";
import PlaceCard from "../Home/PlaceCard"; // Importa PlaceCard
import "./Home.css";

const Home = ({ places }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showLogin, setShowLogin] = useState(true);
  const { user, loginUser } = useUser();

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  const handleLogin = (userData) => {
    loginUser(userData);
  };

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <div>
      {user ? (
        <>
        <section className="home-search">
          <div className="container-home">
            <p>¡Bienvenido {user.email}! Encuentra los mejores lugares pet friendly para disfrutar junto a tu peludo compañero.</p>
            <Search places={places} setSearchResults={setSearchResults} />
          </div>
        </section>

        <div className="search-results">
          {searchResults.map((place) => (
            <PlaceCard key={place.place_id} place={place} />
          ))}
        </div>
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
