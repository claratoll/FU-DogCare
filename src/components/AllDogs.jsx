import { useEffect, useState } from "react";

const AllDogs = (props) => {
  const [dogs, setDogs] = useState([]);
  const [currentDog, setCurrentDog] = useState(0);

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
      console.log("no dogs");
    }
  }, [dogs]);

  const dog = dogs[currentDog];

  //console.log(dog);

  const displayDogImages = () => {
    if (dog && dogs.length > 0) {
      return (
        <div>
          {dogs.map((dog, index) => (
            <div key={index} className="display_dogs">
              <h2 onClick={() => props.toOneDog(dog)}>{dog.name}</h2>
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
      <p>Show all dogs</p>

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
