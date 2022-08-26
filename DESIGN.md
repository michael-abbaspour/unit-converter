# Design Process

This markdown file provides my thought process and planning behind
the project and step-by-step how I approached everything. I hope
this makes it easier to follow!

I plan on updating this project every so often. So that also means
I will be updating this file to reflect any changes I make.

## Goal

The goal is to create a Unit Converter which allows the user to convert
various types of measurement types into a respective unit of their choice.
There will be two inputs, one of which will be automatically populated based
on what the user types and changes into the text box, as well as
what are the unit types being converted from and to based on what's selected
in two, separate select input elements.
___

## HTML

For the HTML structure, I have divided the converter's structure
into segments to better encapsulate the template's content. The segments
are as follows, from top to bottom:

1. [The All-Powerful Parent Wrapper](#the-all-powerful-parent-wrapper)
2. [Measurement Types Container](#measurement-types-container)
3. [Conversion Choices Container](#conversion-choices-container)   

### The All-Powerful Parent Wrapper 

*Elements:*

- A div with the [container](#container) class
- A h1 tag with the [container-heading](#container-heading) class

###### container  
Wraps around the entirety of the Unit Converter model. The container class is
essentially the parent of all the elements within this project (not counting body. html, etc.).
It is used on a div tag.

###### container-heading  
The container-heading class is used for the main heading of the Unit Converter.
It is used on a h1 tag.  

### Measurement Types Container

*Elements:*

- A div tag with the [measurement-type-container](#measurement-types-container) class
- A [label tag](#label-for-measurement-type) for the [measurement-type](#measurement-type) select element.
- A select tag and element with the [measurement-type](#measurement-type) id attribute.

###### measurement-type-container
Parent element which wraps around all the elements within this segment.

###### label for measurement-type
The label for this selector. Exists solely for HTML semantics

###### measurement-type  
An important select element used to provide all the options for the
Measurement Types to choose from. Upon initial load or complete page reset,
this select element possesses a `data-placeholder` data-attribute

### Conversion Choices Container

*Elements:*

- A div tag with the [conversion-choices-container](#conversion-choices-container) class
- The first div tag with the [first conversion-container](#first-conversion-container) class
- A [label tag](#label-for-first-conversion-text-input) for [first-conversion-text-input](#first-conversion-text-input)
- An input text type element for the [first-conversion-text-input](#first-conversion-text-input) id attribute
- A [label tag](#label-for-first-conversion) for the [first-conversion](#first-conversion) select element
- An input select type element for the [first-conversion](#first-conversion) id attribute
- A second div tag with the [second conversion-container](#second-conversion-container) class
- A [label tag](#label-for-second-conversion-text-input) for the [second-conversion-text-input](#second-conversion-text-input)
- An input type text element for the [second-conversion-text-input](#second-conversion-text-input) id attribute
- A [label tag](#label-for-second-conversion) for the [second-conversion](#second-conversion) select element
- An input select type element for the [second-conversion](#second-conversion) id attribute

###### conversion-choices-container
The parent wrapper for this segment of the HTML. This segment is unique where there are
two conversion-container classes used to separate the two text inputs, and two select
elements into their own subsections.

###### first conversion-container
The subsection housing all the configuration for the first text input and select input.

###### label for first-conversion-text-input
The label for this selector. Exists solely for HTML semantics.

###### first-conversion-text-input
The first text input element. This is where users will type what value they would like
to be converted to the preconfigured unit types.

###### label for first-conversion
The label for this selector. Exists solely for HTML semantics.

###### first-conversion
The first select input element. This select tag houses the types of units
and will dynamically populate and update based on the category of Measurement Types
from the [measurement-type](#measurement-type) element is currently selected.

###### second conversion-container
The subsection housing all the configuration for the second text input and select input.

###### label for second-conversion-text-input
The label for this selector. Exists solely for HTML semantics

###### second-conversion-text-input
The second text input element. Users will be able to also input and change values
within this text box, automatically populating the first input text element.

###### label for second-conversion
The label for this selector. Exists solely for HTML semantics.

###### second-conversion
The second select input element. This select tag houses the types of units
and will dynamically populate and update based on the category of Measurement Types
from the [measurement-type](#measurement-type) element is currently selected.
___

## JavaScript

Now that we have the HTML set up and established, it's time to begin
the JavaScript portion of the project. This project in particular takes
advantage of JavaScript's ES6 native support for modules

Let's begin with the structure and how we approach this, in order:

- [Main Script File](#main-script-file)
- [Measurement Types JSON and Parsing](#measurement-types-json-and-parsing)
- [Unit Types Data](#unit-types-data)
- [Utility Functions](#utility-functions)

### Main Script File

*Files:*

- index.js

The index.js will be used as the main script file for initializing all of our
primary modules and functions.

### Measurement Types JSON and Parsing

*Files:*

- measurement-types.json
- ./modules/units/measurement-types.js

To begin with, we have a local JSON file called measurement-types.json located
at the root of our project. This JSON files includes the property name
used for each measurement/unit type and their respective singular names,
plural names, and abbreviations.

We cannot use the JSON straight from the get go and need to have the data
parsed correctly. To do this, we use the `measurement-types.js` file to fetch
the JSON file using a Promise and storing the returned response into
a const variable.

    const jsonData = fetch('../measurement-types.json').then((response) => {
        return response.json();
     });

Afterwards, we want to use this variable as a module, so we export it:

    export default await jsonData;

### Unit Types Data

*Files:*

- ./modules/units/area.js
- ./modules/units/speed.js
- ./modules/units/length.js
- ./modules/units/temperature.js
- ./modules/units/volume.js

Next, we need to get the data for the conversion formulas between different
Measurement Types and Unit Types. Unlike measurement-types.json, these
unit types are stored as Objects.

For simplicity's sake, all the different unit types use a similar conversion
formula, making it easy to retrieve and dynamically calculate the result

The ONLY exception is temperature, which must use a different callback
function to calculate certain unit type properties when being put up against one
another.

Let's hold on to our Unit Types data for now, as we plan on using that
in another section.

### Utility Functions

*Files:*

- ./utilities/common-variables.js
- ./utilities/math.js
- ./utilities/uppercase.js

These functions are used to add additional configuration across
multiple files. Instead of rewriting the same variables, functions, and methods, we
store them in these files and export its content as modules.

###### common-variables.js

Used to store common variables which are important and bound to be
used across multiple files. More specifically, these variables
contain all the text and select input elements.

###### math.js

This file contains a method which uses a Function constructor to
return a template literal containing the conversion formula for the text
inputs.

While `eval()` was a choice to be used, instead, due to some of its security
issues, we decided it would be better to use a Function constructor as we can
use return statements and not have to use a script.

###### uppercase.js

This utility function in particular takes the first character of a property or value, and
capitalizes it. This will help as usually in JavaScript (and code in general)
we store data where the values begin with a lowercase character.

Alright! Let's move on to getting data into our HTML DOM elements.

### Populating and Disabling Select Elements

*Files:*

- ./modules/select.js

The `select.js` file is used to configure the behavior of populating,
changing, and updating data within the select input elements.
The three select elements, by their id attributes, are:

- #measurement-types
- #first-conversion
- #second-conversion

These will be the main, targeted DOM elements in this file.

The steps for this file include:

1. [Import the Necessary Modules](#import-the-necessary-modules)
2. [Declare Top File Scoped Variables](#declare-top-file-scoped-variables)
3. [Declare Callback Functions](#declare-callback-functions)
4. [Populate the Measurement Types](#populate-the-measurement-types)
5. [Declare Event Listening Functions](#declare-event-listening-functions)

##### Import the Necessary Modules

First we need to import the modules necessary to be used throughout
the file. This includes:

    import jsonData from '../modules/units/measurement-types.js';
^^^Imports the JSON data we parsed using fetch and Promise.

    import { uppercase } from '../utilities/uppercase.js';
^^^Imports the uppercase utility function.

    import {
     firstConversionSelect,
     measurementTypeSelect,
     secondConversionSelect,
     firstSelectorTextInput,
     secondSelectorTextInput
    } from '../utilities/common-variables.js';`  
^^^Imports all the common variables that were declared.

### Declare Top File Scoped Variables

Next we need to declare the variables at the top of the file. These
include:

    const measurementTypesValue = 'measurementTypes';
^^^ Declares the property we are going to use to retrieve nested properties from the jsonItems module.

    const jsonItems = jsonData[measurementTypesValue];
^^^ Next we use bracket notations to access the `measurementTypesValue` variable.

### Declare Callback Functions

Next we will declare the callback functions to be used to pass into
functions we plan on exporting as modules. They include:

- `populateConversionSelectElement()`
- `disableSelectOptions()`
- `clearInput()`

###### populateConversionSelectElement()

This callback function is used to populate #first-conversion and
#second-conversion select elements. To initialize, we need to pass in
4 different parameters:

- element: The element we are targeted and this function will be applied to.
- selectedIndex: The index of the selected option upon initialization.
- disabledIndex: The disabled index of the selected option upon initialization.
- selectValue: This is the value of what's currently selected in the #measurement-types
  select element.  


    if (selectValue == null) return;
^^^ We first check the value of the #measurement-types to see what it is. If
the value returns null or undefined, we return immediately and stop the function.

    const units = 'units';
    const singularName = 'singular_name';
^^^ We then declare our variables we plan on using for bracket
notations to access the properties from the jsonItems variable
declared at the top of the file.

    const jsonUnits = jsonItems[selectValue][units];
^^^ Here we apply those variables we just declared using bracket notation.

    element.innerText = '';
^^^ Before we append our options, we want to reset what's currently
displayed within the select element. This ensures options do not stack on
top of one another.

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
^^^ We use the `Object.entries` method to retrieve the properties from
the `jsonUnits` variable we declared earlier, and then run a `forEach` method
to retrieve and execute the following behavior through each
of the keys.

    element.selectedIndex = selectedIndex;
^^^ Here we choose the index of the option we would like to be selected
upon initialization. The purpose behind this behavior is to choose a different
index for both #first-conversion and #second-conversion so when initially 
loaded, they have different values selected.

    if (option.index === disabledIndex) {
        option.disabled = true;
    }
^^^ This particular part of the return statement will disable an option
of the index we choose. When we call this function for #first-conversion and
#second-conversion select elements, we want to choose the same value of the 
OPPOSITE selector's selectedIndex so that option is disabled and the user
cannot choose the same values on the same selectors.

###### disableSelectOptions()

This callback function is used to disable an option from the #first-conversion
and #second-conversion select elements. It takes two parameters:

- selector: The select element which we are disabling the specific option within.
- target: The event target's value which is the value to be disabled in the other select element.  
  

    const selectorOptions = [...selector];
^^^ Here we declare a variable to retrieve the options from the select element
OPPOSITE of event target. We use spread syntax to retrieve them, allowing us to
apply `Array` methods.

    const selectorMatchingOption = selectorOptions.find(
        (option) => option.value === target
    );
^^^ Thanks to the spread syntax, we can use the `find()` method
on the `selectorOptions` variable to get the option.value similar to the
`target` parameter and value.

    selectorOptions.forEach((option) => {
        if (option.hasAttribute('disabled')) {
        option.removeAttribute('disabled');
        }
    });
^^^ This will iterate through each of the `selectorOptions` using a `forEach`
removing the disabled attribute if they already have it. The reason for doing this first
is that we are about to apply the disabled attribute again, except it
will be to a different value. This allows us to dynamically choose which option gets
disabled, based on what the user changes in the select elements.

    if (selectorMatchingOption != null) {
        return selectorMatchingOption.setAttribute('disabled', 'disabled');
    }
^^^ Now that we removed the disabled attribute, we can now re-apply it to a 
different option value.

###### clearInputs()

This callback function is used to clear the inputs for #first-conversion-text-input
and #second-conversion-text-input text input elements. It takes one parameter.

- input: The element corresponding to the input text field.


    if (input) {
     return (input.value = '');
    }
^^^ This is a simple callback function. It checks the input
parameter passed in and returns an empty input value, clearing out
the text box.

### Populate the Measurement Types

- `populateMeasurementTypes()`

Here we establish a function which populates the #measurement-types select
element. As the name suggests, this will populate the Measurement Types and
is the top function declared on the file.

    measurementTypeSelect.innerText = '';
^^^ There is no event listener manually attached to #measurement-types; however,
upon load and page refresh we empty out the values, so they do not get added on
top of one another with each initialization.

    const newOptionPlaceholder = new Option(
      measurementTypeSelect.dataset.placeholder,
        '',
        false,
        true
    );
^^^ Creates a placeholder for the select element using the 
`Option` constructor. We attach the placeholder to data-placeholder
defined within the #measurement-types attributes.

    measurementTypeSelect.add(newOptionPlaceholder);
^^^ We add the `newOptionPlaceholder` variable to the select element.

    return Object.keys(jsonItems).forEach((key) => {
      const newOption = document.createElement('option');
      const optionText = document.createTextNode(uppercase(key));

      newOption.value = key;
      newOption.appendChild(optionText);

      measurementTypeSelect.appendChild(newOption);
    });
^^^ We use the `Object.keys()` method to retrieve the top-level keys
from the `jsonItems` variable and then iterate through each key using `forEach`,
applying the necessary logic. Afterwards, we append said options to the
select element.

NOTE: One important thing to realize is that `Object.keys()` only works
in this case because we know what data we are getting back and
control it. Otherwise, it may be better to use something like `Map` or `Set`
as object keys are often written in differing case formats (ex: Camel Case)

    const optionText = document.createTextNode(uppercase(key));
^^^ When creating the text option, we use the `uppercase()` utility function
to capitalize the first character in the key.

We then export this function as a module to be used in our `index.js` file.

### Declare Event Listening Functions

Now that we have all of that established, it's time to create the
functions necessary for providing behavior when certain events are fired.
These include:

- `updateConversionSelectChoices()`
- `firstConversionSelectChange()`,
- `secondConversionSelectChange()`

###### updateConversionSelectChoices()

Function which renders the correct select values for the Conversion fields based on the Measurement Type value.

Here we add a `change` event type to the #measurement-type select element.
Let's go over what we want changed.

    const measurementTypeValue = event.target.value;
^^^ We first put the event target's value (the value of `#measurement-types`)
within a variable

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
^^^ Here we use a `if...else` statement to check the value
of the `measurementTypeValue` variable we just declared. If it is not empty
we call the `populateConversionSelectElement()` callback function twice, each
time applying to the behavior established within the `firstConversionSelect` and
`secondConversionSelect` variables.

If the `measurementTypeValue` variable ends up being false, we empty
the `#first-conversion` and `#second-conversion` select elements instead.

Regardless of which event gets passed, we finally empty the values
of the `#first-conversion-text-input` and `#second-conversion-text-input` text
input elements.

###### firstConversionSelectChange()

This function adds a `change` event listener for the `#first-conversion` select
element.

    const eventTargetValue =
    event.target.options[event.target.selectedIndex].value;
^^^ Declaring a variable, we want to get the `selectedIndex` of the
`#first-conversion`'s current and selected option's index value.

    disableSelectOptions(secondConversionSelect, eventTargetValue);
    clearInput(firstSelectorTextInput);
    clearInput(secondSelectorTextInput);
^^^ We then call the `disableSelectOptions` callback function to disable
the option in the `#second-conversion` select element equal to the
`#first-conversion`'s value before the change event.

Lastly, as a preference, I wanted to empty whatever value was within the text
input elements if the value is changed and event is fired.

###### secondConversionSelectChange()

Same thing as the firstConversionSelectChange(), except we just switch
the parameters and properties to the opposite.

### Converting Unit Values

*Files:*

- ./modules/convert.js

The `convert.js` file is used for converting the inputted values
within the text boxes and updating them to the unit type based on what's
selected in the select boxes.

The steps for this file include:

1. [Import the Right Modules](#import-the-right-modules)
2. [Define the Callback Functions and Methods](#define-the-callback-functions-and-methods)
3. [Define the Temperature Callback Function](#define-the-temperature-callback-function)
4. [Establish the Event Listeners](#establish-the-event-listeners)

###### Import the Right Modules

Similar to `select.js` we need to import the right modules for
this file.

Once those are imported, we move to the next step.

###### Define the Callback Functions and Methods

- `firstConversionValue()`
- `secondConversionValue()`
- `populateTextInputs()`
- `populateTemperatureTextInputs()`

###### firstConversionValue()

We use this callback function to retrieve whatever option's
value is currently selected within the `#first-conversion` selector.

###### secondConversionValue()

Similar to `firstConversionValue()`, except it targets the
`#second-conversion` select element instead.

###### populateTextInputs()

Callback function used to populate the text input elements. It
takes a total of five parameters:

- event: The Event DOM element this belongs to
- type: The Object which the data is being retrieved from. This is going to be
  from the modules exported within the `./modules/units` directory.
  (ex: `area.js`, `speed.js`, etc.)
- nestedObjOne: The first conversion value function to check against. This
  will either be `firstConversionValue()` or `secondConversionValue()` when called.
- nestedObjTwo: The second conversion value function to check against. This
  will either be `firstConversionValue()` or `secondConversionValue()` when called.
- populatedInput: The input text element that is being populated.


    let eventTargetVal = event.target.value;
^^^ We first set the event parameter, which will be whichever
DOM element is the Event Object when called into an Event Listener.

    const unitTypeObject = type[nestedObjOne][nestedObjTwo];
^^^ We then want to take the `type` parameter, and use bracket notations
to get what's currently selected within the `#first-conversion` and
`#second-conversion` select elements. This will allow us
to get the nested properties of the `type`'s object.

     if (type == null) return;
^^^ If `type` is null or undefined, we want to stop the function
execution and exit immediately.

    const mathSymbolString = 'mathSymbol';
    const convertingNumString = 'convertingNum';
    const mathSymbolVal = unitTypeObject[mathSymbolString];
    const convertingNumVal = unitTypeObject[convertingNumString];
^^^ Here we declare the variables to be used to retrieve the `mathSymbol`
and `convertingNum` object properties from its respective `type's` object.

Within the object, the `mathSymbol` represents an operator (ex: * or /),
and the `convertingNum` represents the number used for the formula calculation
along with the inputted number from the user.

    const unitFormula = calculateValues(
      `${eventTargetVal}${mathSymbolVal}${convertingNumVal}`
    );
^^^ Here we take the `eventTargetVal`, `mathSymbolVal`, and `convertingNumVal`
and put them into template literals. We use the `calculateValues`
utility function to return the formula's value through a function's body, and not
through `eval()`'s script.

    populatedInput.value = '';
    return (populatedInput.value = unitFormula);
^^^ Lastly, we empty the `populatedInput` parameter's value (which represents one of the
text input elements) and then return its new value as equal to the one
calculated within the `unitFormula` variable.

###### Define the Temperature Callback Function

Similar to `populateTextInputs()` functions, with minor
differences to represent the slight contrast between the object
properties located within `temperature.js`.

###### Establish the Event Listeners

The functions related to this include:

- firstTextInputEvent()
- secondTextInputEvent()

###### firstTextInputEvent()

This is an event listener for the `#first-conversion-text-input` text element.
The type of event is fired when the value is changed by the user. So a `change`
event.

    const measurementTypeVal = measurementTypeSelect.value;
^^^ Declares a variable for the value currently selected within the
`#measurement-types` select input element.

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
^^^ We then use a `switch` statement with the `measurementTypeVal`
as the expression to check against. Depending on what's selected
for `measurementTypeVal`, the event is fired specifically for that
object's type.

This function is then exported as a module.

###### secondTextInputEvent()

Similar to `firstTextInputEvent()` function, except for creating
an event listener targeting the `#second-conversion-text-input` text element.

Important distinctions to note are within `populateTextInputs` and
`populateTemperatureTextInputs`, the `nestedObjOne`, `nestedObjTwo`, and
`populatedInput` parameters are all reversed to represent which elements
are being targeted.
