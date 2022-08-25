/**
 * Provides Error and Tooltip Handling.
 *
 * NOTE: Currently being worked on. Functionality inactive.
 */
import {
  firstSelectorTextInput,
  secondSelectorTextInput
} from '../utilities/common-variables.js';

const showError = function (input, message) {
  const inputChild = input.firstElementChild;
  parentFormField.classList.add('error');
  parentFormField.classList.remove('success');

  error.innerText = message;
};
