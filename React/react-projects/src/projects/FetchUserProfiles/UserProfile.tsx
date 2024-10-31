// A component responsible for rendering each individual user profile. this is
interface UserProfileInterface {
  data?: any; // any for now
  name: string;
}

// yes will take in a data and name.. to show what to display
function UserProfile({ data, name }: UserProfileInterface) {
  // type is any for now
  const filteredData = data.filter(
    (item: any) => item.name.split(" ")[0] === name,
  );

  console.log(filteredData, "did this filtered data work?");
  return (
    <section>
      <div>
        <h1>{filteredData.name}</h1>
        <p>{filteredData.email}</p>
        <p>{filteredData.address}</p>
      </div>
    </section>
  );
}

export default UserProfile;
