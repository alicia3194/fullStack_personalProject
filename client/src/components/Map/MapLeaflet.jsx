import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../Map/MapLeaflet.css"

const MapLeaflet = ({ places }) => {
    const markers = places.map((place) => ({
      position: [place.latitude, place.longitude],
      name: place.name,
      image: place.image,
    }));
  
    return (
    <>
      <div className="map-card-container">
        <MapContainer center={markers.length > 0 ? markers[0].position : [0, 0]} zoom={13} style={{ width: '100%', height: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>
                <div>
                  <h3>{marker.name}</h3>
                  <img src={marker.image} alt={marker.name} style={{ maxWidth: '100%' }} />
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      </>
    );
  };
  
  export default MapLeaflet;