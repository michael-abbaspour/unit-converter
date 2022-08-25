/**
 * Callback utility function used to convert first character of a string to uppercase.
 *
 * @param {string} str - The parameter and/or property to apply this function to.
 * @returns {string} - Returns a newly, created string with its first character capitalized.
 */
export const uppercase = function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
