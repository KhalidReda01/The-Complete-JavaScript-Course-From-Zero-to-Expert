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
// // function declaration
// // function percentageOfWord1(populationValue) {
// //   return (populationValue / 7900) * 100;
// // }
// // const China = percentageOfWord1(1441);
// // const Egypt = percentageOfWord1(120);
// // const India = percentageOfWord1(1300);

// // const percentageOfWorld2 = function (populationValue) {
// //   return (populationValue / 7900) * 100;
// // };
// // const China1 = percentageOfWord1(1441);
// // const Egypt2 = percentageOfWord1(120);
// // const India3 = percentageOfWord1(1300);
// // console.log(China, Egypt, India);
// // console.log(China1, Egypt2, India3);

// /**
//  * Lecture Arrow Functions Assignment
//  * LECTURE: Arrow Functions
// 1. Recreate the last assignment, but this time create an arrow function called
// 'percentageOfWorld3
//  */
const percentageOfWorld1 = (population) => (population / 7900) * 100;
// const China1 = percentageOfWorld3(1441);
// const Egypt2 = percentageOfWorld3(120);
// const India3 = percentageOfWorld3(1300);
// console.log(China, Egypt, India);
// console.log(China1, Egypt2, India3);
/**
//  * Lecture 6 Functions Calling Other Functions
//  *
//  * . Create a function called 'describePopulation'. Use the function type you
// like the most. This function takes in two arguments: 'country' and
// 'population', and returns a string like this: 'China has 1441 million people,
// which is about 18.2% of the world.'
// 2. To calculate the percentage, 'describePopulation' call the
// 'percentageOfWorld1' you created earlier
// 3. Call 'describePopulation' with data for 3 countries of your choice
//  */

// function describePopulation(country, population) {
//   const percentage = percentageOfWorld1(population);
//   return `${country} has ${population} million people which is about ${percentage}of the world `;
// }
// // const china = percentageOfWorld1(1441);
// console.log(describePopulation("Egypt", 120));
// console.log(describePopulation("china", 1440));
// console.log(describePopulation("saudi", 40));
// console.log(china);
/**
 * UIIDs
 * LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. Done
You may use the values you have been using previously. Store this array into a
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false) Done
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
 */

// };

// const populationValue = [120, 1330, 10, 30];
// console.log(populationValue.length === 4);
// const percentages = [
//   percentageOfWorld1(populationValue[0]),
//   percentageOfWorld1(populationValue[1]),
//   percentageOfWorld1(populationValue[2]),
//   percentageOfWorld1(populationValue[3]),
// ];
// console.log(percentages);

/** LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your
choice. Choose a country which has at least 2 or 3 neighbours. Store the array
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the
index of the country in the 'neighbours' array, and then use that index to
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden'. */
// const neighbours = ["Sudan", "Libya", "Palestine", "saudi", "Turkey"];
// console.log(neighbours);
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central Europian Country");
// }

// neighbours.indexOf("Sudan");
// console.log(neighbours.indexOf("Sudan"));
// // neighbours[0] = "Lebneon";
// neighbours[neighbours.indexOf("Sudan")] = "Lebneon";
// console.log(neighbours);

/**Lecture Introduction to Ojbect
 *Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments)
 */

const myCountry = {
  country: "Egypt",
  capital: "cairo",
  language: "Arabic",
  population: 120,
  neighbours: ["sudan", "libya", "saudi", "palestine", "Turkey", "Lebnon"],
};
/**
 * Lecture Dot vs Bracket Notation
 *Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2.  Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
 */
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neigbhouring countries and a capital called ${myCountry.capital}`
);
myCountry.population = myCountry.population + 2;
console.log(myCountry);
myCountry.population = myCountry.population - 2;
console.log(myCountry);
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,${myCountry.neighbours.length} neigbhouring countries and a capital called ${myCountry.capital}`
);
