import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import header from "./assets/header.png";

import "./App.css";
import Welcome from "./components/Welcome";
import AllDogs from "./components/AllDogs";
import Dog from "./components/Dog";

function App() {
  //create default image och text om inte det funkar

  return (
    <div>
      <div className="logo">
        <h1>Welcome to the Barktastic Adventures</h1>
        <p>Where Dogs Feel at Home!</p>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/dogs" element={<AllDogs />}></Route>

        <Route path="/dogs/:currentdog" element={<Dog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
