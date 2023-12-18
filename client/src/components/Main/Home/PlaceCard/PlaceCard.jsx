import React from 'react';
import "./PlaceCard.css";
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
 
  return (
    <Link to={`/places/${place.place_id}`}>
      <div className="place-card">
        <img src={place.image} alt={place.name} />
        <p className="name-card">{place.name}</p>
      </div>
      <br></br>
      <br></br>
    </Link>
  );
};

export default PlaceCard;

