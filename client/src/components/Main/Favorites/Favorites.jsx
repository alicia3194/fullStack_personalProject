import React from 'react';
import { useFavorites } from '../../../context/FavoritesContext';
import"./Favorites.css";

const Favorites = ({ places }) => {
  const { favorites } = useFavorites();

    return (
      <div className="fav-container">
        <ul className="fav-list">
          {places
            .filter((place) => favorites.includes(place.place_id))
            .map((favoritePlace) => (
              <li key={favoritePlace.place_id} className="fav-item">
                <div className="fav-content">
                  <img src={favoritePlace.image} alt={favoritePlace.name} className="fav-image" />
                  <div className="fav-details">
                    <h3>{favoritePlace.name}</h3>
                    <p>{favoritePlace.location}</p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    );
  };



export default Favorites;