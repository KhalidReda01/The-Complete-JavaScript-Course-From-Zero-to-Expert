// "use strict";
// function logger() {
//   console.log("My name is khalid");
// }
// // calling running invoking function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with  ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number("23");
// console.log(num);

// const age1 = calcAge1(1998);
// // function declartion
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// console.log(age1);

// const age2 = calcAge2(1998);
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// console.log(age1, age2);
/**
 Lecture 5 Arrow  function
 * 
 */

// const calcAge3 = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years}`;
// };
// console.log(calcAge3(1998, "khalid"));

/**
 Lecture 6 Functions Calling Other Functions
 */
// function cutFruits(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applesCut = cutFruits(apples);
//   const orangesCut = cutFruits(oranges);
//   console.log(applesCut, orangesCut);
//   const juice = `Juice with  ${applesCut} pieces of apples and ${orangesCut} pieces of oranges`;
//   return juice;
// }
// console.log(fruitProcessor(3, 2));
/**
 * Lecture 7 Reviweing Functions
 */

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const calcRetiredAge = (birthYear, firstName) => {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years}`);
    return retirement;
  } else {
    return -1;
  }
  //   return `${firstName} retires in ${retirement} years}`;
};
console.log(calcRetiredAge(1998, "khalid"));
console.log(calcRetiredAge(1950, "Hazem"));
