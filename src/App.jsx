import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import header from "./assets/header.png";

import "./App.css";
import Welcome from "./components/Welcome";
import AllDogs from "./components/AllDogs";
import Dog from "./components/Dog";

function App() {
  //create default image och text om inte det funkar

  const [selectedDog, setSelectedDog] = useState(null);

  return (
    <div>
      <div className="logo">
        <h2>Welcome to the Barktastic Adventures</h2>
        <p>Where Dogs Feel at Home!</p>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route
          path="/dogs"
          element={
            <AllDogs
              selectedDog={selectedDog}
              setSelectedDog={setSelectedDog}
            />
          }
        ></Route>
        {/*  <Route path="/dogs/:currentdog" element={<Dog />}></Route>*/}
        <Route
          path="/dogs/:currentdog"
          setSelectedDog={selectedDog}
          element={<Dog />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;

/*
 <div>
        <p>Slide gallery?</p>
        <p>About us - our team - Facilities</p>
        <p>Services - Register your dog</p>
      </div>
      <footer>
        <p>Contact us? Map?</p>
        <p>Privacy Policy and terms</p>
        <p>Copyright</p>
      </footer>*/
