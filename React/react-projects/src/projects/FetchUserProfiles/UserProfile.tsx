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
  imgSrc?: string;
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

  return (
    <div>
      <div className="container">
        <div className="card">
            {/* Image Link Prop will be passed here */}
          <img
            src="https://images.unsplash.com/photo-1534854638093-bada1813ca19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="profile image"
          />

          <div className="card-details">
            <div className="name">{name}</div>
            <p>Email: {email}</p>
            <p>Address: {street + " " + suite + " " + city + " " + parsedZipCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
