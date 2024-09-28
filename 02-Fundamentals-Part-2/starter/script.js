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
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1998);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age1, age2);
