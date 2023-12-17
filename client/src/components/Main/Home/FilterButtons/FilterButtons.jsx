import React from 'react';

const FilterButtons = ({ onFilterClick }) => {
  return (
    <div>
      <button onClick={() => onFilterClick('Todos')}>Todos</button>
      <button onClick={() => onFilterClick('Restaurante')}>Restaurantes</button>
      <button onClick={() => onFilterClick('Cafeteria')}>Cafeterías</button>
      <button onClick={() => onFilterClick('Parque')}>Parques</button>
      <button onClick={() => onFilterClick('Librería')}>Librerías</button>
    </div>
  );
};

export default FilterButtons;
  