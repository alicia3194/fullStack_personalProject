import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from '../../../context/UserContext';
import "./Nav.css"

const Nav = () => {
  const { user, logoutUser } = useUser(); 

  return (
    <div className="navbar-container">
      <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Inicio</Link></li>
        {user && (
          <>
          <li><Link to="/favorites/check">Ver Favoritos</Link></li>
            <li><Link to="/" onClick={logoutUser}>Cerrar Sesión</Link></li>
          </>
        )}
      </ul>
    </nav>
      </div>
  );
};

export default Nav;