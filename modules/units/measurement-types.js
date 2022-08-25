/**
 * Using the Fetch API, takes the measurement-types.json file and parses it, returning an object.
 * @type {Promise<Object>}
 */
const jsonData = fetch('../measurement-types.json').then((response) => {
  return response.json();
});

export default await jsonData;
