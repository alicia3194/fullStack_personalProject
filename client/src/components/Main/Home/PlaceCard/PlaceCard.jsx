import React from 'react';
import "./PlaceCard.css";
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
 
  return (
      <section id='container-place'>
    <Link to={`/places/${place.place_id}`}>
      <div className="place-card">
        <img src={place.image} alt={place.name} />
        <h6 className="name-card">{place.name}</h6>
      </div>
    </Link>
      </section>
  );
};

export default PlaceCard;

