import React from 'react';
import Nav from "./Nav/Nav";
import { useUser } from '../../context/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
    {user && (
        <Nav />
    )}
  </header>
  );
};

export default Header;
