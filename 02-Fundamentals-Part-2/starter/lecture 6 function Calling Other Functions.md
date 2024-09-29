# lecture 6 function Calling Other Functions

```js

// here is the function that we call inside the othre function It's like a cutting machine
function cutFruitPieces(*fruit*) {

 return fruit * 4;

}
// this is the main function
function fruitProcessor(*apples*, *oranges*) {

 const applePieces = cutFruitPieces(apples);

 const orangePieces = cutFruitPieces(oranges);

 const juice = `Juice with ${applePieces} piece of  apples and ${orangePieces} pieces of orange.`;

 return juice;

}

console.log(fruitProcessor(2, 3));
```

![006 Functions Callin[00_06_02][20240928-151423]](C:\Users\Workstation\Desktop\js\02-Fundamentals-Part-2\starter\006 Functions Callin[00_06_02][20240928-151423].png)

```js
/**
 * Lecture 6 Functions Calling Other Functions
 *
 * .
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
 */
//Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
const percentageOfWorld1 = (population) => (population / 7900) * 100;
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people which is about ${percentage}of the world `;
}
const china = percentageOfWorld1(1441);
console.log(describePopulation("Egypt", 120));
console.log(china);
```
