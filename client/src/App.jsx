import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";
import Footer from "./componets/Footer/Footer";
import { UserProvider } from './useContext/UserContext';
import "./App.css";


  function App() {
    return (
      <UserProvider>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </UserProvider>
    );
  }


export default App;