// The main component that fetches the data, handles state, and
// maps over each profile to render a UserProfile.
import { useEffect, useState } from "react";
import { fetchData, fetchImages } from "./apiService";
import UserProfile from "../FetchUserProfiles/UserProfile";
import InputBox from "./InputSearch";

function UserProfileLists() {
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
      <InputBox />
      <div>
        {data.map(
          ({
            id,
            name,
            email,
            address: { suite, street, city, zipcode },
          }: any) => (
            <div key={id}>
              {" "}
              <UserProfile
                name={name}
                suite={suite}
                street={street}
                city={city}
                rawZipCode={zipcode}
                email={email}
              />{" "}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default UserProfileLists;
