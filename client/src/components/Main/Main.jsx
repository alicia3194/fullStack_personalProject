import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Authentication from "./Authentication/Authentication";
import Details from "./Details/Details"
import Favorites from "./Favorites/Favorites"
import { useUser } from "../../context/UserContext"
import MapLeaflet from '../Map/MapLeaflet';

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [places, setPlaces] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/places");
        const data = await response.json();
  
        const placesFav = data.map(place => ({
          ...place,
          isFavorite: false, 
        }));
  
        setPlaces(placesFav);
      } catch (error) {
        console.error('Error al obtener lugares:', error);
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
          element={<Details places={places} user={user} />}
        />
        <Route path="/favorites/check" element={<Favorites user={user} />} /> 
        <Route path="/map" element={<MapLeaflet places={places} />} />
      </Routes>
    </main>
  );
};

export default Main;