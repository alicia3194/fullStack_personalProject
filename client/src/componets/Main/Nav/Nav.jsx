import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from '../../../useContext/UserContext';

const Nav = () => {
  const { user, logoutUser } = useUser(); 

  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/favorite">Favoritos</Link></li>
        {user && (
          <>
            <li><Link to="/" onClick={logoutUser}>Cerrar Sesión</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;