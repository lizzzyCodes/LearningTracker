import { useEffect } from "react";
import { fetchData } from "./apiService";

function UserProfile() {
  useEffect(() => {
    async function startFetching() {
      try {
        const data = await fetchData();
      } catch (e) {
        console.log(e, "throw the error");
      }
    }
    startFetching();
  }, []);
  return <p> text</p>;
}

export default UserProfile;
