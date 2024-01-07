import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import "./Favorites.css";
import Huella from "../../../public/image/huella.png";

const Favorites = ({ user }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [favoritePlaces, setFavoritePlaces] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        if (!user || !user.user_id) {
          console.error('Usuario no autenticado.');
          return;
        }

        const authToken = localStorage.getItem('token');
        if (!authToken) {
          console.error('Usuario no autenticado.');
          return;
        }

        const response = await fetch('http://localhost:5001/api/favorites/check', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`,
          },
        });

        if (response.ok) {
          try {
            const data = await response.json();
            console.log(data); // Agrega este console.log
            const favoritesArray = Array.isArray(data) ? data : [data];

            setFavoritePlaces(favoritesArray);
          } catch (error) {
            console.error('Error al analizar la respuesta JSON:', error);
          }
        } else {
          console.error("Error");
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    };

    fetchFavorites();
  }, [user]);

  const handleRemoveFromFavorites = async (placeId) => {

    setFavoritePlaces(prevFavorites => prevFavorites.filter(place => place.place_id !== placeId));
  };

  return (
    <div className="fav-container">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          ¡Acción de favoritos completada!
        </Alert>
      )}

      <ul className="search-results">
        <div>
          <h1 className="hit-the-floor">Mi rincón Pet-Friendly favorito</h1>
          <img src={Huella} alt="huella" style={{ width: '250px', height: '250px', float: 'center' }} />
        </div>

        {favoritePlaces.map((place) => (
        <li key={place.place_id} className="place-card">
          <div className="card-inner">
            {place.image && <img src={place.image} alt={place.name} />}
            <div className="name-card">{place.name}</div>
            {place.isFavorite !== undefined && (
              <button
                onClick={() => handleRemoveFromFavorites(place.place_id)}
                className="remove-button"
              >
                ✖️
              </button>
            )}
          </div>
        </li>
))}
      </ul>
    </div>
  );
};

export default Favorites;
