// file that keeps all functions 
// function takes in a zip code and returns one zipcode
export function extractPrimaryZipCode(zipCode: string) {
  const zipParts = zipCode.split("-");
  return zipParts[0]; // returns the first zipcode
}

