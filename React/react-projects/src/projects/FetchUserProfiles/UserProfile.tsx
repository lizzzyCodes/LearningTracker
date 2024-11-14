// A component responsible for rendering each individual user profile.
import { extractPrimaryZipCode } from "./helperFunctions";
import "./UserProfile.css";
interface UserProfileInterface {
  name?: string;
  suite?: string;
  street?: string;
  city: string;
  rawZipCode: string;
  email: string;
  imgSrc?: any;
}

// edge case what happens if the user does not have a suite?
function UserProfile({
  name,
  street,
  suite,
  city,
  rawZipCode,
  email,
  imgSrc,
}: UserProfileInterface) {
  const parsedZipCode = extractPrimaryZipCode(rawZipCode);

  // converting svg into a blob
  const svgBlob = new Blob([imgSrc], { type: "image/svg+xml" });
  // creating a URL for it so it can be displayed in the iamge tag
  const svgUrl = URL.createObjectURL(svgBlob);

  return (
    <div>
      <div className="container">
        <div className="card">
          <img alt="image" src={svgUrl} />
          <div className="card-details">
            <div className="name">{name}</div>
            <p>Email: {email}</p>
            <p>
              Address: {street + " " + suite + " " + city + " " + parsedZipCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
