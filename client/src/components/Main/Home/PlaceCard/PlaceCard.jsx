import React from 'react';
import "./PlaceCard.css";
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
 
  return (
    <Link to={`/places/${place.place_id}`}>
      <div className="place-card">
        <img src={place.image} alt={place.name} />
        <h3>{place.name}</h3>
      </div>
    </Link>
  );
};

export default PlaceCard;

