import React, { useState } from 'react';

const Search = ({ places, setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchClick = () => {

    const results = places.filter(place => place.name.toLowerCase().includes(searchTerm.toLowerCase()));
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
      <button className='b_search' onClick={handleSearchClick}>🔍</button>
    </div>
  );
};

export default Search;
