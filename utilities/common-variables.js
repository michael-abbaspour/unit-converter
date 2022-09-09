/**
 * @file Provides a set of commonly used variables and properties planned to be used across multiple files.
 */

/**
 * The DOM HTML Element selector for the Measurement Types select element.
 * @type {HTMLSelectElement}
 */
export const measurementTypeSelect =
  document.querySelector('#measurement-type');

/**
 * The DOM HTML Element selector for the First Conversion select element.
 * @type {HTMLSelectElement}
 */
export const firstConversionSelect =
  document.querySelector('#first-conversion');

/**
 * The DOM HTML Element selector for the Second Conversion select element.
 * @type {HTMLSelectElement}
 */
export const secondConversionSelect =
  document.querySelector('#second-conversion');

/**
 * The DOM HTML Element selector for the First Text Input element.
 * @type {HTMLInputElement}
 */
export const firstSelectorTextInput = document.querySelector(
  'input[name="first-text-input"]'
);

/**
 * The DOM HTML Element selector for the Second Text Input element.
 * @type {HTMLInputElement}
 */
export const secondSelectorTextInput = document.querySelector(
  'input[name="second-text-input"]'
);

/**
 * The DOM HTML Element selector for the Validation Span element
 * @type {HTMLSpanElement}
 */
export const errorValidation = document.querySelector('#validation');

/**
 * The DOM HTML Element selector for the Written Conversion Span element.
 * @type {HTMLSpanElement}
 */
export const writtenConversion = document.querySelector('#written-conversion');
