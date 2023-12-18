import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../../../context/UserContext';
import { Nav as BootstrapNav } from 'react-bootstrap';
import './Nav.css';

const Nav = () => {
  const { user, logoutUser } = useUser();

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <BootstrapNav variant="tabs" defaultActiveKey="/">
          <BootstrapNav.Item>
            <Link to="/" className="nav-link">Inicio</Link>
          </BootstrapNav.Item>
          {user && (
            <>
              <BootstrapNav.Item>
                <Link to="/favorites/check" className="nav-link">Favoritos</Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/map" className="nav-link">Mapa</Link>
              </BootstrapNav.Item>
              <BootstrapNav.Item>
                <Link to="/" onClick={logoutUser} className="nav-link">Cerrar Sesión</Link>
              </BootstrapNav.Item>
            </>
          )}
        </BootstrapNav>
      </nav>
    </div>
  );
};

export default Nav;


