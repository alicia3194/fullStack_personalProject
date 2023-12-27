import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css';
import Nav from '../../Header/Nav/Nav';
import { useFavorites } from '../../../context/FavoritesContext';

import Alert from 'react-bootstrap/Alert';


const Details = ({ places, user }) => {
  const { placeId } = useParams();
  const place = places.find((p) => p.place_id.toString() === placeId);

  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (user && place) {
          const response = await fetch('http://localhost:5001/api/favorites/check', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_email: user.email,
              place_id: place.place_id,
            }),
          });

          const data = await response.json();
          setIsFavorite(data.isFavorite);
          setShowAlert(true);
        }
      } catch (error) {
        console.error('Error al verificar el estado de favoritos:', error);
      }
    };

    checkFavoriteStatus();
  }, [user, place]);

  const { addToFavorites } = useFavorites();

  const handleAddToFavorites = () => {
  
    addToFavorites(place.place_id);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };


  return (
    <>
      <Nav />
      <div className="details-container">
        <div className="image-container">
          <img src={place.image} alt={place.name} />
        </div>
     
        <div className="details-info">
          <h2>{place.name}</h2>
          <p>Ubicación: {place.location}</p>
          <p>Horarios: {place.schedules}</p>
          <button onClick={handleAddToFavorites} className="details-bttn">&#x2764;</button>
        </div>

        </div>
 

      <Alert
        show={showAlert}
        variant="info"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        ¡Ha sido agregado a favoritos!
      </Alert>

    </>
  );
};

export default Details;


