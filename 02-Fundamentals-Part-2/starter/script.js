function logger() {
  console.log("my name is khalid");
}

// running the function invoking / calling the function
logger();
logger();
logger();
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const applesJuice = fruitProcessor(5, 0);
console.log(applesJuice);
