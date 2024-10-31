// The main component that fetches the data, handles state, and
// maps over each profile to render a UserProfile.
import { useEffect } from "react";
import { fetchData } from "./apiService";
// renders
function UserProfileLists() {
  // add state to store the data and update the individual userProfile component
  useEffect(() => {
    async function startFetching() {
      try {
        const data = await fetchData();
        console.log(data, "overall data here [ec]");
      } catch (e) {
        console.log(e, "throw the error");
      }
    }
    startFetching();
  }, []);

  return <p> text</p>;
}

export default UserProfileLists;
