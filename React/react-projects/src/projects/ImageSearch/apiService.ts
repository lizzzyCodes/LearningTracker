export const fetchData = async (term: string) => {
  try {
    // office query will be replaced from term the user puts
    const url = `https://api.unsplash.com/search/photos?query=${term}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Client-ID znxxVR6eVRYbUYBA8o3tLPzZYVGwX65NNei1Cc2fMps",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching api: ${response.status}`);
    }
    // always convert to json
    const json = await response.json();
    return json.results;
  } catch (e) {
    console.log(e, "error thrown");
  }
};
