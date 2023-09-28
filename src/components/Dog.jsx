import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Dog = (props) => {
  const [dogData, setDogData] = useState(null);
  const currentdog = useParams();

  console.log("dog data is ", dogData);

  // Check if there is a selected dog
  if (!props.selectedDog) {
    return <div>No dog data available.</div>;
  } else {
    console.log("age is " + props.selectedDog.age);
  }

  return (
    <section className="display_dogs">
      <button onClick={props.backToMain}>GoBackToMain</button>
      <h1>{props.selectedDog.name}</h1>

      <p>Age: {props.selectedDog.age}</p>
      <p>Breed: {props.selectedDog.breed}</p>
      <p>Chip Number: {props.selectedDog.chipNumber}</p>
      <p>
        Owner: {props.selectedDog.owner.name} {props.selectedDog.owner.lastName}
      </p>
      <p>Phone Number: {props.selectedDog.owner.phoneNumber}</p>
      <p>Sex: {props.selectedDog.sex}</p>
      {props.selectedDog.img ? (
        <img
          src={props.selectedDog.img}
          alt={`Dog ${props.selectedDog.name}`}
        />
      ) : (
        <div>No dog image available.</div>
      )}
    </section>
  );
};

export default Dog;
