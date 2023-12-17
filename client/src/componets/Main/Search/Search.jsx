import React, { useState } from 'react';
import PlaceCard from "../Home/PlaceCard";

const Search = ({ places, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {
    // Lógica de búsqueda aquí
    const results = places.filter(place => place.name.toLowerCase().includes(searchTerm.toLowerCase()));
    // Actualiza los resultados utilizando la función pasada como prop
    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar lugares..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
};

export default Search;
