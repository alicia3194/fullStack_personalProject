import React from "react";
import { Route, Routes} from "react-router-dom";
import Home from './Home/Home';
import Authentication from './Authentication/Authentication';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Authentication />} />
      </Routes>
    </main>
  );
}

export default Main;



