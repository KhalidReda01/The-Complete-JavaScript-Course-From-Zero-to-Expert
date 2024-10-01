# Lecture 17 Looping Arrays Breaking and Continuing

```js

/**
 * Lecture 17 Looping Arrays Breaking and Continuing
 */
// here we have a normal array 
const khalidArray = [
  "khalid",
  "reda",
  2024 - 1998,
  "teacher",
  ["Ibrahim", "ahmed", "micael"],
  true,
];
// here we create an empty array to store the types of khalid array 
let types = [];
// here we have an iteration for loop start and end according to the khalid array length
for (let i = 0; i < khalidArray.length; i++) {
  // reading from khalid array
  console.log(khalidArray[i], typeof khalidArray[i]);
  // filling types array
  // types[i] = typeof khalidArray[i];
  types.push(typeof khalidArray[0]);
}
console.log(types);
// here we have a years array birth year and what to have one for ages accoring to it
const years = [1991, 2007, 1969, 2020];
let ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break this is the hard confusing one at first 
// continue is to exit the current iteration of the loop and continue to the next one
// break is used to completely terminate the whole loop
console.log("--- only Stirngs ---");
for (let i = 0; i < khalidArray.length; i++) {
  if (typeof khalidArray[i] !== "string") continue;
  console.log(khalidArray[i], typeof khalidArray[i]);
}

console.log("--- BREAK WITH NUMBER    ---");
for (let i = 0; i < khalidArray.length; i++) {
  if (typeof khalidArray[i] === "number") break;
  console.log(khalidArray[i], typeof khalidArray[i]);
}

```

