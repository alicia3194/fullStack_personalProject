import { UserProvider } from './context/UserContext';
import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
  };
  console.log(user)

  return (
    <UserProvider value={{ user, loginUser, logoutUser }}>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </UserProvider>
  );
}

export default App;

