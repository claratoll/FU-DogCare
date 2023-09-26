import { useState } from "react";
import header from "./assets/header.png";

import "./App.css";
import Welcome from "./components/Welcome";
import AllDogs from "./components/AllDogs";
import Dog from "./components/Dog";

function App() {
  //create default image och text om inte det funkar

  const WELCOME = "welcome",
    ALLDOGS = "alldogs",
    DOG = "dog";
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  const [selectedDog, setSelectedDog] = useState(null);

  let content = null;

  switch (currentScreen) {
    case WELCOME:
      content = <Welcome nextScreenToDogs={() => setCurrentScreen(ALLDOGS)} />;
      break;
    case ALLDOGS:
      content = (
        <AllDogs
          toOneDog={(dog) => {
            setSelectedDog(dog);
            setCurrentScreen(DOG);
          }}
        />
      );
      break;
    case DOG:
      content = (
        <Dog
          selectedDog={selectedDog}
          backToMain={() => setCurrentScreen(WELCOME)}
        />
      );
      break;
    default:
      content = <Welcome />;
  }

  return (
    <>
      <div className="logo">
        <h2>Welcome to the Barktastic Adventures</h2>
        <p>Where Dogs Feel at Home!</p>
      </div>
      {content}
    </>
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
