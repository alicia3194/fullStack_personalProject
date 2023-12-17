import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Authentication from "./Authentication/Authentication";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [places, setPlaces] = useState([]);

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
  }, []); // Realiza la solicitud al cargar la página sin depender de searchTerm

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Home places={places} setSearchTerm={setSearchTerm} />}
        />
        <Route path="/auth/*" element={<Authentication />} />
      </Routes>
    </main>
  );
};

export default Main;
