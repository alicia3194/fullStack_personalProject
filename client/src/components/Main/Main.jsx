import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Authentication from "./Authentication/Authentication";
import Details from "./Details/Details";
const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [places, setPlaces] = useState([]);
  console.log('places:', places);
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
        <Route
          path="/"
          element={<Home places={places} setSearchTerm={setSearchTerm} />}
        />
        <Route path="/auth/*" element={<Authentication />} />
        <Route path="/places/:placeId" element={<Details places={places} />} />      </Routes>
    </main>
  );
};

export default Main;
