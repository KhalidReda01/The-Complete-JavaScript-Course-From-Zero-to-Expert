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
function fruitCut(fruit) {
  return fruit * 4;
}
function fruitProcessor(apples, oranges) {
  const appleCut = fruitCut(apples);
  const orangesCut = fruitCut(oranges);
  const juice = `Juice with ${appleCut} apples and ${orangesCut} oranges`;
  return juice;
}
console.log(fruitProcessor(4, 3));
