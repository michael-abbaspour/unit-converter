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





