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
  console.log('Estado inicial de favoritos:', favorites);

const addToFavorites = (placeId) => {
  console.log('Intento agregar a favoritos:', placeId);    
  
  if (placeId !== undefined && placeId !== null) {
      setFavorites((prevFavorites) => {
        if (!prevFavorites.includes(placeId)) {
          const newFavorites = [...prevFavorites, placeId];
          console.log('Nuevo estado de favoritos (agregar):', newFavorites);
          return newFavorites;
        } else {
          console.warn('El lugar ya está en la lista de favoritos.');
          return prevFavorites;
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
