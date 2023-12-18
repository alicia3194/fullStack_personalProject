import React from 'react';

const FilterButtons = ({ onFilterClick }) => {
  return (
    <div>
      <button className='b_home1' onClick={() => onFilterClick('Todos')}>Todos</button>
      <button className='b_home2' onClick={() => onFilterClick('Restaurante')}>Restaurantes</button>
      <button className='b_home3' onClick={() => onFilterClick('Cafeteria')}>Cafeterías</button>
      <button className='b_home4' onClick={() => onFilterClick('Parque')}>Parques</button>
      <button className='b_home5' onClick={() => onFilterClick('Librería')}>Librerías</button>
    </div>
  );
};

export default FilterButtons;
  