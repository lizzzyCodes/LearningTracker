import { seeds } from "./data";
export const fetchData = async () => {
  try {
    // fetches all users
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();

    return json;
  } catch (e) {
    console.log(e, "ERROR");
  }
};

// function to generate random images
// use localStorage to prevent API call overload
export const fetchImages = async () => {
  function getRandomSeed(nameList: string[]) {
    let randomIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomIndex];
  }

  let seed = getRandomSeed(seeds);
  let key = `avatar-${seed}`;

  // create a random function to fetch a random picture
  try {
    // think hashmap
    //  Check if the image URL is already in localStorage and store this in a variable
    // if stored image in localStorage call the stored image and pass it down the profiles?
    // else call the API and set the local storage
    const value = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;
  } catch (e) {
    console.log(e, "error fetching images api");
  }
};
