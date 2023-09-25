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

  const dog = dogs[currentDog];

  console.log(dogs[1]);

  const displayDogImages = () => {
    return dog.img.map((imageUrl, index) => (
      <img key={index} src={imageUrl} alt={`Dog ${index + 1}`} />
    ));
  };

  return (
    <section>
      <p>Show all dogs</p>
      <button onClick={props.toOneDog}>GoToOneDog</button>
      <div>
        {dog && dog.img && dog.img.length > 0 ? (
          <div>{displayDogImages()}</div>
        ) : (
          <div>No dog images available.</div>
        )}
      </div>
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

  return dogsData;
};

export default AllDogs;
