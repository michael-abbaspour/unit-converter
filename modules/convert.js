/**
 * Focused on providing the configuration and behavior behind the conversions and formula implementation.
 */

import {
  measurementTypeSelect,
  firstConversionSelect,
  secondConversionSelect,
  firstSelectorTextInput,
  secondSelectorTextInput
} from '../utilities/common-variables.js';

import { areaFormulaData } from './units/area.js';
import { speedFormulaData } from './units/speed.js';
import { lengthFormulaData } from './units/length.js';
import { temperatureFormulaData } from './units/temperature.js';
import { volumeFormulaData } from './units/volume.js';
import { calculateValues } from '../utilities/math.js';

/**
 * Used to retrieve the current value selected within the First Conversion dropdown selector.
 * @returns {string}
 */
const firstConversionValue = function () {
  const firstConversionValueOptions = [...firstConversionSelect];
  const firstConversionValueGet = firstConversionValueOptions
    .filter((option) => option.selected)
    .map((option) => option.value);
  return firstConversionValueGet[0];
};
/**
 * Used to retrieve the current value selected within the Second Conversion dropdown selector.
 * @returns {string}
 */
const secondConversionValue = function () {
  const secondConversionValueOptions = [...secondConversionSelect];
  const secondConversionValueGet = secondConversionValueOptions
    .filter((option) => option.selected)
    .map((option) => option.value);
  return secondConversionValueGet[0];
};

/**
 * Function used to provide the event firing behavior for the First Text HTMLInputElement.
 */
export function firstTextInputEvent() {
  firstSelectorTextInput.addEventListener('change', function (event) {
    const measurementTypeVal = measurementTypeSelect.value;

    switch (measurementTypeVal) {
      case 'area':
        populateTextInputs(
          event,
          areaFormulaData,
          firstConversionValue(),
          secondConversionValue(),
          secondSelectorTextInput
        );
        break;
      case 'speed':
        populateTextInputs(
          event,
          speedFormulaData,
          firstConversionValue(),
          secondConversionValue(),
          secondSelectorTextInput
        );
        break;
      case 'length':
        populateTextInputs(
          event,
          lengthFormulaData,
          firstConversionValue(),
          secondConversionValue(),
          secondSelectorTextInput
        );
        break;
      case 'temperature':
        populateTemperatureTextInputs(
          event,
          temperatureFormulaData,
          firstConversionValue(),
          secondConversionValue(),
          secondSelectorTextInput
        );
        break;
      case 'volume':
        populateTextInputs(
          event,
          volumeFormulaData,
          firstConversionValue(),
          secondConversionValue(),
          secondSelectorTextInput
        );
        break;
    }
  });
}

/**
 * Function used to provide the event firing behavior for the Second Text HTMLInputElement.
 */
export function secondTextInputEvent() {
  secondSelectorTextInput.addEventListener('change', function (event) {
    const measurementTypeVal = measurementTypeSelect.value;

    switch (measurementTypeVal) {
      case 'area':
        populateTextInputs(
          event,
          areaFormulaData,
          secondConversionValue(),
          firstConversionValue(),
          firstSelectorTextInput
        );
        break;
      case 'speed':
        populateTextInputs(
          event,
          speedFormulaData,
          secondConversionValue(),
          firstConversionValue(),
          firstSelectorTextInput
        );
        break;
      case 'length':
        populateTextInputs(
          event,
          lengthFormulaData,
          secondConversionValue(),
          firstConversionValue(),
          firstSelectorTextInput
        );
        break;
      case 'temperature': {
        populateTemperatureTextInputs(
          event,
          temperatureFormulaData,
          secondConversionValue(),
          firstConversionValue(),
          firstSelectorTextInput
        );
        break;
      }
      case 'volume':
        populateTextInputs(
          event,
          volumeFormulaData,
          secondConversionValue(),
          firstConversionValue(),
          firstSelectorTextInput
        );
        break;
    }
  });
}

/**
 * Callback variable function used to populate the adjacent text input element based on various criteria, including formula usage.
 * @param {Event} event - The Event DOM element this belongs to.
 * @param {Object} type - The Object which the data is being retrieved from.
 * @param {string} nestedObjOne - The first conversion value function to check against.
 * @param {string} nestedObjTwo - The second conversion value function to check against.
 * @param {HTMLInputElement} populatedInput - The input text element that is being populated.
 * @returns {number|undefined}
 */
const populateTextInputs = function (
  event,
  type,
  nestedObjOne,
  nestedObjTwo,
  populatedInput
) {
  let eventTargetVal = event.target.value;
  const unitTypeObject = type[nestedObjOne][nestedObjTwo];

  if (type == null) return;

  const mathSymbolString = 'mathSymbol';
  const convertingNumString = 'convertingNum';
  const mathSymbolVal = unitTypeObject[mathSymbolString];
  const convertingNumVal = unitTypeObject[convertingNumString];
  const unitFormula = calculateValues(
    `${eventTargetVal}${mathSymbolVal}${convertingNumVal}`
  );

  populatedInput.value = '';
  return (populatedInput.value = unitFormula);
};

/**
 * Similar to the populateTextInputs function, except solely used for the Temperature unit type.
 * @param {Event} event - The Event DOM element this belongs to.
 * @param {Object} type - The Object which the data is being retrieved from.
 * @param {string} nestedObjOne - The first conversion value function to check against.
 * @param {string} nestedObjTwo - The second conversion value function to check against.
 * @param {HTMLInputElement} populatedInput - The input text element that is being populated.
 * @returns {number|undefined}
 */
const populateTemperatureTextInputs = function (
  event,
  type,
  nestedObjOne,
  nestedObjTwo,
  populatedInput
) {
  let eventTargetVal = event.target.value;
  const unitTypeObject = type[nestedObjOne][nestedObjTwo];

  if (type == null) return;

  const mathSymbolString = 'mathSymbol';
  const convertingNumString = 'convertingNum';
  const secondMathSymbolString = 'secondMathSymbol';
  const secondConvertingNumString = 'secondConvertingNum';
  const thirdMathSymbolString = 'thirdMathSymbol';
  const thirdConvertingNum = 'thirdConvertingNum';

  const mathSymbolVal = unitTypeObject[mathSymbolString];
  const convertingNumVal = unitTypeObject[convertingNumString];
  const secondMathSymbolVal = unitTypeObject[secondMathSymbolString];
  const secondConvertingNumVal = unitTypeObject[secondConvertingNumString];
  const thirdMathSymbolVal = unitTypeObject[thirdMathSymbolString];
  const thirdConvertingNumVal = unitTypeObject[thirdConvertingNum];
  let unitFormula = calculateValues(
    `(${eventTargetVal}${mathSymbolVal}${convertingNumVal})${secondMathSymbolVal}${secondConvertingNumVal}`
  );

  if (nestedObjOne === 'kelvin' && nestedObjTwo === 'fahrenheit') {
    let unitFormula = calculateValues(
      `(${eventTargetVal}${mathSymbolVal}${convertingNumVal})${secondMathSymbolVal}${secondConvertingNumVal}${thirdMathSymbolVal}${thirdConvertingNumVal}`
    );
    populatedInput.value = '';
    return (populatedInput.value = unitFormula);
  } else if (nestedObjOne === 'fahrenheit' && nestedObjTwo === 'kelvin') {
    let unitFormula = calculateValues(
      `(${eventTargetVal}${mathSymbolVal}${convertingNumVal})${secondMathSymbolVal}${secondConvertingNumVal}${thirdMathSymbolVal}${thirdConvertingNumVal}`
    );
    populatedInput.value = '';
    return (populatedInput.value = unitFormula);
  }

  populatedInput.value = '';
  return (populatedInput.value = unitFormula);
};
