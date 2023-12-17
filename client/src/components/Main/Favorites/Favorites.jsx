import React from 'react';
import { useFavorites } from '../../../context/FavoritesContext';

const Favorites = ({ places }) => {
  const { favorites } = useFavorites();

  return (
    <div>
      <ul>
        {places
          .filter((place) => favorites.includes(place.place_id))
          .map((favoritePlace) => (
            <li key={favoritePlace.place_id}>
              <img src={favoritePlace.image} alt={favoritePlace.name} />
              <span>{favoritePlace.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;