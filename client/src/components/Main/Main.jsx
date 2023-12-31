import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Authentication from "./Authentication/Authentication";
import Details from "./Details/Details"
import Favorites from "./Favorites/Favorites"
import { useFavorites } from "../../context/FavoritesContext";
import MapLeaflet from '../Map/MapLeaflet';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [places, setPlaces] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/places");
        const data = await response.json();
        setPlaces(data);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };
  
    fetchData();
  }, []); 

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home places={places} setSearchTerm={setSearchTerm} />} />
        <Route path="/auth/*" element={<Authentication />} />
        <Route 
          path="/places/:placeId" 
          element={<Details places={places} />}
        />
        <Route 
          path="/favorites/check"
          element={
            <Favorites
            places={places}
            placeId={places.placeId}
            isFavorite={favorites.includes(places.placeId)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            className="favorites-card" 
          />
          }
        />
        <Route path="/map" element={<MapLeaflet places={places} />} />
      </Routes>
    </main>
  );
};

export default Main;