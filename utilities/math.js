/**
 * Callback utility function used to calculate values defined using template literals.
 * Using the Function constructor is a workaround to avoid using eval().
 *
 * @param {string} obj - The template string to be calculated and converted.
 * @returns {*}
 */
export function calculateValues(obj) {
  return Function(`"use strict";return (${obj})`)();
}
