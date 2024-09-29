// "use strict";
// function logger() {
//   console.log("my name is khalid");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(4, 2);
// console.log(appleOrangeJuice);

// function declartion vs function expression
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(1998);
// console.log(age1, age2);

/**
 * Lecture 5 Arrow function
 */
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const khalid = calcAge3(1998);
// console.log(khalid);

// const yearsToRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} will retire after ${retirement} years`;
// };
// console.log(yearsToRetirement(1998, "khalid"));
/**
 * Lecture 6 Functions Calling Other Functions
 */

// this is the main machine that you put the fruits in it but we need to cut it first
// the customer dont' care about this part but you do so you will create a cutting
//??machine
// function fruitCut(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const appleCut = fruitCut(apples);
//   const orangesCut = fruitCut(oranges);
//   const juice = `Juice with ${appleCut} apples and ${orangesCut} oranges`;
//   return juice;
// }
// console.log(fruitProcessor(4, 3));

/**
 * Lecture 7 Reviweing Functions
 */
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const yearsToRetirement = (birthYear, firstName) => {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} will retire after ${retirement} years`);
//     return retirement;
//   } else {
//     console.log("there is a bug here");
//     return -1;
//   }
//   // return `${firstName} will retire after ${retirement} years`;
// };
// console.log(yearsToRetirement(1998, "khalid"));
// console.log(yearsToRetirement(1950, "loda"));
/**
 * Lecture 9 Introduction to Arrays
 */
// const name1 = "khalid";
// const name2 = "Reda";
// const name3 = "Ahmed";
// const names = ["khalid", "Reda", "Ahmed"];
// const names2 = new Array("khald", "ahmed", "reda");
// console.log(names2);
// console.log(names2[0]);
// console.log(names2[1]);
// console.log(names2[names.length - 1]);

// // Exercise
// const years = [1992, 1993, 2021, 2023];
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const ages1 = calcAge(years[0]);
// const ages2 = calcAge(years[1]);
// const ages3 = calcAge(years[2]);
// console.log(ages1, ages2, ages3);
// console.log(
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 2])
// );
const friends = ["khalid", "Ahmed", "Ibrahim"];
// add element to an end of array

console.log(friends);
friends.push("loda");
console.log(friends);
friends.pop();
console.log(friends);
friends.unshift("Kareem");
console.log(friends.includes("khalid"));
friends.shift();
console.log(friends.shift());

console.log(friends);
