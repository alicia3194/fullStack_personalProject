import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from "../../Header/Nav/Nav";
import './Details.css'; 

const Details = ({ places }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { placeId } = useParams();
  const place = places && places.find(p => p.place_id === parseInt(placeId, 10));

  if (!place) {
    return <div>No se encontró el lugar</div>;
  }

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Nav/>
      <section className="details-container">
        <div className="image-container">
          <img src={place.image} alt={place.name} />
        </div>
        <div className="details-info">
          <h2>{place.name}</h2>
          <p>Ubicación: {place.location}</p>
          <p>Horarios: {place.schedules}</p>
          {/* Otros detalles */}
          <button onClick={handleFavoriteClick}>
            {isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          </button>
        </div>
      </section>
    </>
  );
};

export default Details;

