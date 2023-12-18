import React from 'react';
import "./FilterButtons.css";

const FilterButtons = ({ onFilterClick }) => {
  return (
    <div className="button-container">
      <button onClick={() => onFilterClick('Todos')}>Todos</button>
      <button onClick={() => onFilterClick('Restaurante')}>Restaurantes</button>
      <button onClick={() => onFilterClick('Cafeteria')}>Cafeterías</button>
      <button onClick={() => onFilterClick('Parque')}>Parques</button>
      <button onClick={() => onFilterClick('Librería')}>Librerías</button>
    </div>
  );
};

export default FilterButtons;
  