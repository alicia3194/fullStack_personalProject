import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './Details.css';
import Nav from '../../Header/Nav/Nav';
import Alert from 'react-bootstrap/Alert';
import { useUser } from '../../../context/UserContext';

const useCheckFavoriteStatus = (user, place) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteId, setFavoriteId] = useState(null);

  useEffect(() => {

    if (user && user.user_id && place) {
      const checkFavoriteStatus = async () => {
        try {
          const response = await fetch(`http://localhost:5001/api/favorites/check`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              user_id: user.user_id,
              place_id: place.place_id,
            }),
          });

          const data = await response.json();

          setIsFavorite(data.isFavorite);

          if ('favorite_id' in data) {
            setFavoriteId(data.favorite_id);
          }
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      };

      checkFavoriteStatus();
    }
  }, [user, place]);

  return { isFavorite, favoriteId };
};

const Details = ({ places }) => {
  const { user } = useUser();
  const { placeId } = useParams();
  const place = places.find((p) => p.place_id.toString() === placeId);


  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  const { isFavorite, favoriteId } = useCheckFavoriteStatus(user, place);

  const handleAddToFavorites = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/favorites/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          place_id: place.place_id,
          user_id: user.user_id,
        }),
      });
  
      const data = await response.json();
  
      if ('isFavorite' in data) {
        setIsFavorite(data.isFavorite);
  
        if ('favorite_id' in data) {
          setFavoriteId(data.favorite_id);
  
          setPlaces(prevPlaces => prevPlaces.map(prevPlace => 
            prevPlace.place_id === place.place_id
              ? { ...prevPlace, isFavorite: data.isFavorite }
              : prevPlace
          ));
        }
  
        handleAlert();
      } else {
        res.status(500).json({ error: error.message });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const handleRemoveFromFavorites = async () => {
    try {
      const response = await fetch(`http://localhost:5001/api/favorites/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.user_id,
          favorite_id: favorites.favorite_id,
        }),
      });

      const data = await response.json();

      if ('success' in data && data.success) {
        setIsFavorite(false);
        handleAlert();
      } else {
        console.error('Error:', data.error);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const handleAlert = () => {
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
          {isFavorite ? (
            <button onClick={handleRemoveFromFavorites} className="details-bttn">
              &#x2764; Eliminar de Favoritos
            </button>
          ) : (
            <button onClick={handleAddToFavorites} className="details-bttn">
              &#x2764; Agregar a Favoritos
            </button>
          )}
          <Link to="/favorites/check">Ver Favoritos</Link>
        </div>
      </div>

      <Alert
        show={showAlert}
        variant="info"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        {isFavorite ? 'Eliminado de favoritos' : 'Agregado a favoritos'}
      </Alert>
    </>
  );
};

export default Details;
