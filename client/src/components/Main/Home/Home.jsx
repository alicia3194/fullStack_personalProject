import React, { useState } from "react";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import { useUser } from "../../../context/UserContext";
import Search from "./Search/Search";
import PlaceCard from "./PlaceCard/PlaceCard";
import FilterButtons from "./FilterButtons/FilterButtons";
import Imagen from "../../../public/image/Perros.png";
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
    if (filter === 'Todos') {
      setSearchResults(places);
    } else {
      const filteredResults = places.filter(place => place.type === filter);
      setSearchResults(filteredResults);
    }
    setShowPlaces(true);
  };

  return (
    <div className="home-container">
      {user ? (
        <>
          <div className="welcome-section">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h4 className="p_home">¡Bienvenido {user.email}!</h4> 
          <p>Encuentra los mejores lugares pet friendly para disfrutar junto a tu peludo compañero.</p>
          </div>
          <img src={Imagen} alt="Perros" style={{ width: "400px", height: "auto"}} />
          <Search places={places} setSearchResults={handleSearch} />
          <FilterButtons onFilterClick={handleFilterClick} />
          {showPlaces && (
            <div className="search-results">
              {searchResults.map((place) => (
                <PlaceCard key={place.place_id} place={place} />
              ))}
            </div>
          )}
          <br></br>
          <br></br>
        </>
      ) : (
        <>
          {showLogin ? <Login onLogin={handleLogin} /> : <Signup onLogin={handleLogin} />}
          <button onClick={toggleForm}>
            {showLogin ? "Sign-Paw" : "Woof-In"}
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
