import React from 'react';
import Nav from "../Main/Nav/Nav";
import { useUser } from '../../useContext/UserContext';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
    {user && (
      <>
        <Nav />
      </>
    )}
  </header>
  );
};

export default Header;
