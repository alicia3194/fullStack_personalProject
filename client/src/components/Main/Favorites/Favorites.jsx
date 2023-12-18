import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useFavorites } from '../../../context/FavoritesContext';

import "./Favorites.css";
import Huella from "../../../public/image/huella.png"

const Favorites = ({ places, removeFromFavorites }) => {
  const { favorites } = useFavorites();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  }, [showAlert]);

  const handleRemoveFromFavorites = (placeId) => {
    removeFromFavorites(placeId);
    setShowAlert(true);
  };

  return (
    <div className="fav-container">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          ¡Eliminado de favoritos!
        </Alert>
      )}
      
      <ul className="search-results">
        <div>
      <h1 className="hit-the-floor">Mi rincón Pet-Friendly favorito</h1>
      <img src={Huella} alt="huella"style={{width: '250px',height: '250px',float: 'center'}}
      />
        </div>

        {places
          .filter((place) => favorites.includes(place.place_id))
          .map((favoritePlace) => (
            <li key={favoritePlace.place_id} className="place-card">
              <div className="card-inner">
                <img src={favoritePlace.image} alt={favoritePlace.name} />
                <div className="name-card">{favoritePlace.name}</div>
                <button onClick={() => handleRemoveFromFavorites(favoritePlace.place_id)} className="remove-button">
                ✖️
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
