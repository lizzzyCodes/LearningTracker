// The main component that fetches the data, handles state, and
// maps over each profile to render a UserProfile.
import { useEffect, useState } from "react";
import { fetchData, fetchImages } from "./apiService";
import UserProfile from "../FetchUserProfiles/UserProfile";
import InputBox from "./InputSearch";
import LoadingSpinner from "./LoadingSpinner";

function UserProfileLists() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false); // false because not yet loading
  useEffect(() => {
    // before you start fetching setLoading to true as this indicates that we are loading
    setLoading(true);
    async function startFetching() {
      try {
        const data = await fetchData();
        setData(data); // setting the data using react use State

        console.log(data, "overall data here [ec]");
      } catch (e) {
        console.log(e, "throw the error");
      } finally {
        setLoading(false); // done fetching data
      }
    }
    startFetching();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    // if loading? display spinner else display input box etc etc.
    <div>
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
