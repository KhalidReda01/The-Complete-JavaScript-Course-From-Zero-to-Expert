# Lecture 17 Looping Arrays Breaking and Continuing

```js

/**
 * Lecture 17 Looping Arrays Breaking and Continuing
 */
const khalidArray = [
  "khalid",
  "reda",
  2024 - 1998,
  "teacher",
  ["Ibrahim", "ahmed", "micael"],
  true,
];
let types = [];
for (let i = 0; i < khalidArray.length; i++) {
  // reading from jonas array
  console.log(khalidArray[i], typeof khalidArray[i]);
  // filling types array
  // types[i] = typeof khalidArray[i];
  types.push(typeof khalidArray[0]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
let ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
// continue is to exit the iteration of the loop and continue to the next one
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

