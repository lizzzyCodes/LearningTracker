// file that keeps all functions
// function takes in a zip code and returns one zipcode
export function extractPrimaryZipCode(zipCode: string) {
  const zipParts = zipCode.split("-");
  return zipParts[0]; // returns the first zipcode
}

// takes in a name and removes the Mrs, Miss, Dr etc. So when users search for a user
// it avoids the titles

export function filterName(name: string, title: string[]) {
  let splitName = name.split(" ");

  if (!title.includes(splitName[0])) {
    return name;
  }
  // skip the first index of array then join into a string
  const filteredName = splitName.slice(1).join(" ");
  return filteredName;
}
