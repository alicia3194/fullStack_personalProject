import React from 'react';
import "./PlaceCard.css";

const PlaceCard = ({ place }) => {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} />
      <h3>{place.name}</h3>
    </div>
  );
};

export default PlaceCard;

