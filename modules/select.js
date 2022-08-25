/**
 * Used to configure the behavior for the HTMLSelectElements of the Unit Converter.
 */
import jsonData from '../modules/units/measurement-types.js';
import { uppercase } from '../utilities/uppercase.js';
import {
  firstConversionSelect,
  measurementTypeSelect,
  secondConversionSelect,
  firstSelectorTextInput,
  secondSelectorTextInput
} from '../utilities/common-variables.js';

/**
 * Declares the property we are going to use to retrieve nested properties from the jsonItems module.
 * @type {string} measurementTypesValue
 */
const measurementTypesValue = 'measurementTypes';
/**
 * The base object we are pulling data from within the jsonItems module.
 * @type {Object} jsonItems
 */
const jsonItems = jsonData[measurementTypesValue];

/**
 * Used to populate the Measurement Types select dropdown.
 */
export function populateMeasurementTypes() {
  measurementTypeSelect.innerText = '';

  const newOptionPlaceholder = new Option(
    measurementTypeSelect.dataset.placeholder,
    '',
    false,
    true
  );

  measurementTypeSelect.add(newOptionPlaceholder);

  return Object.keys(jsonItems).forEach((key) => {
    const newOption = document.createElement('option');
    const optionText = document.createTextNode(uppercase(key));

    newOption.value = key;
    newOption.appendChild(optionText);

    measurementTypeSelect.appendChild(newOption);
  });
}

/**
 * Function which renders the correct select values for the Conversion fields based on the Measurement Type value.
 * @type {Function}
 */
export function updateConversionSelectChoices() {
  measurementTypeSelect.addEventListener('change', function (event) {
    const measurementTypeValue = event.target.value;

    if (measurementTypeValue !== '') {
      populateConversionSelectElement(
        firstConversionSelect,
        0,
        1,
        measurementTypeValue
      );
      populateConversionSelectElement(
        secondConversionSelect,
        1,
        0,
        measurementTypeValue
      );
    } else {
      firstConversionSelect.innerText = '';
      secondConversionSelect.innerText = '';
    }
    firstSelectorTextInput.value = '';
    secondSelectorTextInput.value = '';
  });
}

/**
 * The event listener for when a user clicks on the first conversion dropdown and selects a new value.
 * @type {Function}
 */
export function firstConversionSelectChange() {
  firstConversionSelect.addEventListener('change', function (event) {
    const eventTargetValue =
      event.target.options[event.target.selectedIndex].value;

    disableSelectOptions(secondConversionSelect, eventTargetValue);
    clearInput(firstSelectorTextInput);
    clearInput(secondSelectorTextInput);
  });
}

/**
 * The event listener for when a user clicks on the second conversion dropdown and selects a new value.
 * @type {Function}
 */
export function secondConversionSelectChange() {
  secondConversionSelect.addEventListener('change', function (event) {
    const eventTargetValue =
      event.target.options[event.target.selectedIndex].value;

    disableSelectOptions(firstConversionSelect, eventTargetValue);
    clearInput(firstSelectorTextInput);
    clearInput(secondSelectorTextInput);
  });
}

/**
 * Callback function used for populating the Conversion Select elements.
 * @param {HTMLElement} element - The HTMLElement being populated with the options.
 * @param {number} selectedIndex - The index for the element selected upon initialization.
 * @param {number} disabledIndex - The index for the element which is disabled based on the other dropdown value.
 * @param {string} selectValue - The conditional value of the selected Measurement Type to dynamically show the correct options.
 */
const populateConversionSelectElement = function (
  element,
  selectedIndex,
  disabledIndex,
  selectValue
) {
  if (selectValue == null) return;

  const units = 'units';
  const singularName = 'singular_name';

  const jsonUnits = jsonItems[selectValue][units];

  element.innerText = '';

  return Object.entries(jsonUnits).forEach((key) => {
    const keyValues = Object.values(key)[0];
    const keyTexts = Object.values(key)[1][singularName];
    const option = document.createElement('option');
    option.value = keyValues;
    option.text = keyTexts;
    element.appendChild(option);
    element.selectedIndex = selectedIndex;

    if (option.index === disabledIndex) {
      option.disabled = true;
    }
  });
};

/**
 * Callback function used to dynamically disable a selector's options based on a specific value.
 * @param {HTMLElement} selector - The select element which we are disabling the specific option within.
 * @param {string} target - The event target's value which is the value to be disabled in the other select element.
 */
const disableSelectOptions = function (selector, target) {
  const selectorOptions = [...selector];
  const selectorMatchingOption = selectorOptions.find(
    (option) => option.value === target
  );

  selectorOptions.forEach((option) => {
    if (option.hasAttribute('disabled')) {
      option.removeAttribute('disabled');
    }
  });

  if (selectorMatchingOption != null) {
    return selectorMatchingOption.setAttribute('disabled', 'disabled');
  }
};

/**
 * Clears and removes the value of the input text field.
 * @param {HTMLElement} input - The HTMLElement corresponding to the input text field.
 * @returns {string}
 */
const clearInput = function (input) {
  if (input) {
    return (input.value = '');
  }
};
