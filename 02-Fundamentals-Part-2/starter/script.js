"use strict";
function logger() {
  console.log("My name is khalid");
}
// calling running invoking function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with  ${apples} apples and ${oranges} oranges`;
  return juice;
}

const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number("23");
console.log(num);
