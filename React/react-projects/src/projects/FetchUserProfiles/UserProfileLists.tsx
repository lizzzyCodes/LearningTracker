// The main component that fetches the data, handles state, and
// maps over each profile to render a UserProfile.
import { useEffect, useState } from "react";
import { fetchData, fetchImages } from "./apiService";
import UserProfile from "../FetchUserProfiles/UserProfile";
import LoadingSpinner from "./LoadingSpinner";
import { getRandomSeed } from "./apiService";
import { seeds } from "./data";

// fetch the image URLs for each seed

function UserProfileLists() {
  const [data, setData] = useState(Array<[]>);
  const [loading, setLoading] = useState(false); // false because not yet loading
  // const [images, setImages] = useState([]);

  useEffect(() => {
    // before you start fetching setLoading to true as this indicates that we are loading
    setLoading(true);
    // get a random seed, append it to a array,
    async function startFetching() {
      try {
        const data = await fetchData();

        // map over the data and then update the state with the updated data to then render on our user profile component

        const updatedData = await Promise.all(
          data.map(async (item: any) => {
            const eachImage = getRandomSeed(seeds);
            const image = await fetchImages(eachImage);
            return { ...item, image };
          }),
        );

        setData(updatedData); // setting the data using react use State

      } catch (e) {
        console.log(e, "throw the error");
      }
      setLoading(false);
    }
    startFetching();
  }, []);

  if (loading) return <LoadingSpinner />;
  // would i store each random seed name into an array ?
  return (
    <div>
      <div>
        {data.map(
          ({
            id,
            name,
            email,
            address: { suite, street, city, zipcode },
            image,
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
                imgSrc={image}
              />{" "}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default UserProfileLists;
