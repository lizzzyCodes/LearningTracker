export const fetchData = async () => {
  try {
    // fetches all users
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json[0].name, "NAME HERE [ec]");
    return json;
  } catch (e) {
    console.log(e, "ERROR");
  }
};
