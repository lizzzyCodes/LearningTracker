// function takes in a zip code and returns one zipcode
export function parseZipCode(zipcode: string) {
  const parsedZip = zipcode.split("-");
  return parsedZip[0]; // returns the first zipcode
}
