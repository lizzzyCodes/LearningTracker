// The main component that fetches the data, handles state, and
// maps over each profile to render a UserProfile.
import { useEffect, useState } from "react";
import { fetchData } from "./apiService";
import UserProfile from "../FetchUserProfiles/UserProfile";
// renders
function UserProfileLists() {
  // add state to store the data and update the individual userProfile component
  // this will just fetch the data and pass in though the UserProfile component for now just render all the
  // data on the screen
  const [data, setData] = useState([]);
  useEffect(() => {
    async function startFetching() {
      try {
        const data = await fetchData();
        setData(data); // setting the data using react use State
        console.log(data, "overall data here [ec]");
      } catch (e) {
        console.log(e, "throw the error");
      }
    }
    startFetching();
  }, []);

  return (
    <div>
      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            {" "}
            <UserProfile
              name={item.name}
              suite={item.address.suite}
              street={item.address.street}
              city={item.address.city}
              zipcode={item.address.zipcode}
              email={item.email}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserProfileLists;
