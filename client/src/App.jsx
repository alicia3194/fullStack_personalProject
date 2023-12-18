import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { UserProvider } from './context/UserContext';
import { FavoritesProvider } from './context/FavoritesContext';

import './App.css';

function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </FavoritesProvider>
    </UserProvider>
  );
}

export default App;