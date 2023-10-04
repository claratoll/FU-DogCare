import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GetDogs from "./GetDogs";
import noimageavailable from "../assets/noimageavailable.png";

const AllDogs = () => {
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();
  const [currentDog, setCurrentDog] = useState(0);

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

  const dog = dogs[currentDog];

  const displayDogImages = () => {
    if (dog && dogs.length > 0) {
      return (
        <div className="gallery">
          {dogs.map((dog, index) => (
            <div key={index} className="display_dogs">
              <Link className="link" to={`/dogs/` + dog.name} state={{ dog }}>
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
                <img
                  src={dog.img}
                  alt={`Dog ${dog.name}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = noimageavailable;
                  }}
                />
              ) : (
                <div>No dog image available.</div>
              )}
            </div>
          ))}
        </div>
      );
    } else {
      return <div>Dogs are loading</div>;
    }
  };

  return (
    <section>
      <ul>
        <li onClick={() => navigate("/")}>Home</li>
      </ul>

      <div>{displayDogImages()}</div>
    </section>
  );
};

export default AllDogs;
