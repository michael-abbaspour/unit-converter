/**
 * Provides Error, Tooltip, and Message Handling.
 */

import {
  errorValidation,
  writtenConversion
} from '../utilities/common-variables.js';

/**
 * Shows a message at the bottom of the Unit Converter container if an error occurs.
 * @param {HTMLElement} input - The input element being targeted.
 * @param {string} message - The message to be displayed when the error is shown.
 */
const showError = function (input, message) {
  input.classList.add('input-error');
  errorValidation.classList.add('error');
  errorValidation.classList.remove('hide');

  errorValidation.innerText = message;
};

/**
 * Exported, module-based error function specifically for the Measurement Types dropdown to display a message if empty.
 * @param {Event} event - The Measurement Types Event object.
 */
export function measurementTypesEmpty(event) {
  const measurementTypeVal = document.querySelector('#measurement-type');
  if (measurementTypeVal.value === '') {
    showError(event.target, 'Please select a Measurement Type first');
  }
}

/**
 * Exported, module-based function which clears any, and all, error-related configuration currently active and on-display.
 */
export const clearErrorInputs = function () {
  const firstTextSelector = document.querySelector(
    'input[name="first-text-input"]'
  );
  const secondTextSelector = document.querySelector(
    'input[name="second-text-input"]'
  );

  if (firstTextSelector.classList.contains('input-error')) {
    firstTextSelector.classList.remove('input-error');
  }

  if (secondTextSelector.classList.contains('input-error')) {
    secondTextSelector.classList.remove('input-error');
  }

  if (errorValidation.classList.contains('error')) {
    errorValidation.classList.remove('error');
    errorValidation.classList.add('hide');
    errorValidation.innerText = '';
  }
};

/**
 * Exported, module-based function which specifically clears the Conversion Message displayed.
 * @return {string}
 */
export const clearConversionMessage = function () {
  if (writtenConversion.innerText !== '') {
    writtenConversion.classList.add('hide');
    return (writtenConversion.innerText = '');
  }
};
