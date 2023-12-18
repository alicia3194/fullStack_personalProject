import React, { useState } from "react";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import { useUser } from "../../../context/UserContext";
import Search from "./Search/Search";
import PlaceCard from "./PlaceCard/PlaceCard";
import FilterButtons from "./FilterButtons/FilterButtons";
import "./Home.css";

const Home = ({ places }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [showPlaces, setShowPlaces] = useState(false);
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
    setShowPlaces(true);
  };

  const handleFilterClick = (filter) => {
    if (filter === "Todos") {
      setSearchResults(places);
    } else {
      const filteredResults = places.filter((place) => place.type === filter);
      setSearchResults(filteredResults);
    }
    setShowPlaces(true);
  };

  return (
    <section>
      {user ? (
        <>
          <div className="home-section">
            <p className="welcome-message">
              ¡Bienvenid@ {user.email}! Encuentra los mejores lugares PetFriendly para disfrutar junto a tu peludo compañero.
            </p>
            <Search places={places} setSearchResults={handleSearch} />
            <FilterButtons onFilterClick={handleFilterClick} />
          </div>
          {showPlaces && (
            <div className="results-section">
              {searchResults.map((place) => (
                <PlaceCard key={place.place_id} place={place} />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {showLogin ? <Login onLogin={handleLogin} /> : <Signup onLogin={handleLogin} />}
          <button onClick={toggleForm}>{showLogin ? "Sign-Paw" : "Woof-In"}</button>
        </>
      )}
    </section>
  );
};

export default Home;

