import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  const navigate = useNavigate();

  const handleMeetOurDogsClick = () => {
    // Use the `navigate` function to go to the "AllDogs" route
    navigate("/dogs");
  };

  return (
    <section>
      <menu>Navigation menu?</menu>
      <button onClick={props.nextScreen}>Book a visit today</button>
      <button onClick={handleMeetOurDogsClick}>Meet our dogs</button>
    </section>
  );
};

export default Welcome;
