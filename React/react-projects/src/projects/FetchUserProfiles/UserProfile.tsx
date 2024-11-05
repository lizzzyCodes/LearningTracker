// A component responsible for rendering each individual user profile. this is
interface UserProfileInterface {
  name?: string;
  address?: string;
  suite?: string;
  street?: string;
  city: string;
  zipcode: string;
  email: string;
}

// yes will take in a data and name.. to show what to display
// edge case what happens if the user does not have a suite?
function UserProfile({
  name,
  address,
  street,
  suite,
  city,
  zipcode,
  email,
}: UserProfileInterface) {
  // user's name, email, and address in a styled card format.
  // street, suite, city, zipcode
  return (
    <div>
      <div className="container">
        <div className="cardImage">
          <img
            src="https://images.unsplash.com/photo-1534854638093-bada1813ca19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            alt="profile image"
          />
        </div>
        <div className="card-content">
          <p>{name}</p>
          <p>{email}</p>
          <p>{street + " " + suite + " " + city + " " + zipcode}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
