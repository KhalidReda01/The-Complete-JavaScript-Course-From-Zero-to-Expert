"use strict";
/**
 * LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the
returned values in 3 different variables, and log them to the console
 */
function describeCountry(country, population, capitalCity) {
  const data = `${country} has ${population} million people and its capital city ${capitalCity}.`;
  return data;
}
const firstCountry = describeCountry("Egypt", 120, "Cairo");
const secondCountry = describeCountry("Saudi Arabi", 120, "Riad");
const thirdCountry = describeCountry("Qatar", 120, "Doha");
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
