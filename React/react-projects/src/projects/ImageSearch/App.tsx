import { useEffect } from "react";
import { fetchData } from "./apiService";

function ImageSearch() {
  useEffect(() => {
    async function startFetching() {
      try {
        const data = await fetchData("cars");
        console.log(data, "data in main mapp [ec]");
      } catch (e) {
        console.log(e, "error inside main app");
      }
    }
    startFetching();
  }, []);
  return <div>Main app here! :D</div>;
}
export default ImageSearch;
