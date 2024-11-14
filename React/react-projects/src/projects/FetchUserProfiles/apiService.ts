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

export function getRandomSeed(nameList: string[]) {
  let randomIndex = Math.floor(Math.random() * nameList.length);
  return nameList[randomIndex]; // will return a seed
}
// function to generate random images
// use localStorage to prevent API call overload

export const fetchImages = async (seed: string) => {
  // create a random function to fetch a random picture
  try {

    let key = `avatar-${seed}`;
    let url: string;
    let value: string;

    if (!localStorage.getItem(key)) {
      url = `https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Error fetching image API call");
      }

      value = await response.text();

      localStorage.setItem(key, value);

    } else {
      // fetch the key stored in the storage
      value = localStorage.getItem(key) || "";

    }
    return value;
  } catch (e) {
    console.log(e, "error fetching images api");
  }
};
