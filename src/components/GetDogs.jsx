const GetDogs = async () => {
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

export default GetDogs;
