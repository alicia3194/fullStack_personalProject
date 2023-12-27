import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

const addToFavorites = (placeId) => {
  
  if (placeId !== undefined && placeId !== null) {
      setFavorites((prevFavorites) => {
        if (!prevFavorites.includes(placeId)) {
          const newFavorites = [...prevFavorites, placeId];
          return newFavorites;//añadido a favoritos
        } else {
          return prevFavorites; // ya esta en favoritos
        }
      });
    } else {
      console.error('Intento de agregar un placeId undefined o null al estado de favoritos');
    }
  };
  
  const removeFromFavorites = (placeId) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((id) => id !== placeId);
      if (newFavorites.length !== prevFavorites.length) {
        console.log('Nuevo estado de favoritos (quitar):', newFavorites);
      } else {
        console.error('El lugar no estaba en la lista de favoritos.');
      }
      return newFavorites;
    });
  };
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
