import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GetDogs from "./GetDogs";
import noimageavailable from "../assets/noimageavailable.png";

const Dog = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const dogName = params.currentdog;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetDogs();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (dogs.length > 0) {
      console.log("First dog name:", dogs[0].name);
    } else {
      console.log("loading dogs");
    }
  }, [dogs]);

  console.log("params " + params.currentdog);
  console.log("dogName is " + dogName);

  const dogsWithSameName = dogs.filter((dog) => dog.name === dogName);

  if (dogsWithSameName.length === 0) {
    console.log("No dog with the name " + dogName + " found.");
  } else {
    console.log("Found dog with the name " + dogName);
  }

  const displayDog = () => {
    return dogsWithSameName.map((selectedDog, index) => (
      <section className="display_one_dog" key={index}>
        <div>
          <h2>{selectedDog.name}</h2>
          <p>
            {selectedDog.present
              ? selectedDog.name + " is present today"
              : selectedDog.name + " is at home today"}
          </p>
          <p>Age: {selectedDog.age}</p>
          <p>Breed: {selectedDog.breed}</p>
          <p>Chip Number: {selectedDog.chipNumber}</p>
          <p>

            Owner: {selectedDog.owner.name} {selectedDog.owner.lastName}

          </p>
          <p>Phone Number: {selectedDog.owner.phoneNumber}</p>
          <p>Sex: {selectedDog.sex}</p>
        </div>
        {selectedDog.img ? (
          <img
            src={selectedDog.img}
            alt={`Dog ${selectedDog.name}`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = noimageavailable;
            }}
          />
        ) : (
          <div>No dog image available.</div>
        )}
      </section>
    ));
  };

  return (
    <div>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/dogs")}>All dogs</li>
      </ul>
      <div>{displayDog()}</div>
    </div>
  );
};

export default Dog;
