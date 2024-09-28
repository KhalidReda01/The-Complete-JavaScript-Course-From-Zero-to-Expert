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
// function describeCountry(country, population, capitalCity) {
//   const data = `${country} has ${population} million people and its capital city ${capitalCity}.`;
//   return data;
// }
// const firstCountry = describeCountry("Egypt", 120, "Cairo");
// const secondCountry = describeCountry("Saudi Arabi", 120, "Riad");
// const thirdCountry = describeCountry("Qatar", 120, "Doha");
// console.log(firstCountry);
// console.log(secondCountry);
// console.log(thirdCountry);

/**
 * Lecture Function Declaration vs Expression
 * 
 * 1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population
represents. For example, China has 1441 million people, so it's about 18.2% of
the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
 */
// function declaration
// function percentageOfWord1(populationValue) {
//   return (populationValue / 7900) * 100;
// }
// const China = percentageOfWord1(1441);
// const Egypt = percentageOfWord1(120);
// const India = percentageOfWord1(1300);

// const percentageOfWorld2 = function (populationValue) {
//   return (populationValue / 7900) * 100;
// };
// const China1 = percentageOfWord1(1441);
// const Egypt2 = percentageOfWord1(120);
// const India3 = percentageOfWord1(1300);
// console.log(China, Egypt, India);
// console.log(China1, Egypt2, India3);

/**
 * Lecture Arrow Functions Assignment
 * LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called
'percentageOfWorld3
 */
const percentageOfWorld1 = (population) => (population / 7900) * 100;
// const China1 = percentageOfWorld3(1441);
// const Egypt2 = percentageOfWorld3(120);
// const India3 = percentageOfWorld3(1300);
// console.log(China, Egypt, India);
// console.log(China1, Egypt2, India3);
/**
 * Lecture 6 Functions Calling Other Functions
 * 
 * . Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
 */

function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${percentage}of the world `;
}
const china = percentageOfWorld1(1441);
console.log(describePopulation("Egypt", 120));
console.log(china);
