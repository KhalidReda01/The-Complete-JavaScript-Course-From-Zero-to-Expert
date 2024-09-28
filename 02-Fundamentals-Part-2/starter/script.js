// function logger() {
//   console.log("my name is khalid");
// }

// // running the function invoking / calling the function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/**
 * lecture 4 Function Declarations vs. Expressions
 *
 */

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// // function declaration
// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(1998);
// console.log(age1, age2);

/**
 * lecture 5 Arrow function
 *
 */
// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1998);
console.log(age3);
