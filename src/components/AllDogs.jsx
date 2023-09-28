import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllDogs = (props) => {
  const [dogs, setDogs] = useState([]);
  const [currentDog, setCurrentDog] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    // Check if there is at least one dog in the array
    if (dogs.length > 0) {
      console.log("First dog name:", dogs[0].name);
    } else {
      console.log("loading dogs");
    }
  }, [dogs]);

  const dog = dogs[currentDog];

  const displayDogImages = () => {
    if (dog && dogs.length > 0) {
      return (
        <div className="gallery">
          {dogs.map((dog, index) => (
            <div key={index} className="display_dogs">
              <Link to={`/dogs/` + dog.name} state={{ selectedDog: dog }}>
                <h2>{dog.name}</h2>
              </Link>
              <p>Age: {dog.age}</p>
              <p>Breed: {dog.breed}</p>
              <p>Chip Number: {dog.chipNumber}</p>
              <p>
                Owner: {dog.owner.name} {dog.owner.lastName}
              </p>
              <p>Phone Number: {dog.owner.phoneNumber}</p>
              <p>Sex: {dog.sex}</p>
              {dog.img ? (
                <img src={dog.img} alt={`Dog ${dog.name}`} />
              ) : (
                <div>No dog image available.</div>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No dog data available.</div>;
    }
  };

  return (
    <section>
      <Link to="/">
        <button>Home</button>
      </Link>

      <div>{displayDogImages()}</div>
    </section>
  );
};

const getDogs = async () => {
  const baseUrl = "https://api.jsonbin.io/v3/b/";
  const binID = "6511473f12a5d3765982d98d";

  const url = `${baseUrl}${binID}/latest`;

  const response = await fetch(url, {
    headers: {
      "X-Master-Key":
        "$2a$10$zEzyk36G9r62fF1sYEatcuNYqDJqxVCil9/OgfEGgxLAbbwLdm7QC",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  const dogsData = await response.json();

  console.log(dogsData);

  return dogsData.record;
};

export default AllDogs;
