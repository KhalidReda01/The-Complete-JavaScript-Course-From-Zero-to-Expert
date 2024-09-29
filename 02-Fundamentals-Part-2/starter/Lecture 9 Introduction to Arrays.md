# Lecture 9 Introduction to Arrays

```js

/**
 * Lecture 9 Introduction to Arrays
 */
// why we use arrays like here if we don't use it then we will have a 10 variable 
const friend1 = "khalid";
const friend2 = "steven";
const friend3 = "peter";
const friends = ["Michael", "steven", "Peter"];
console.log(friends);
// second way of creating arrays
const years = new Array(1888, 1000, 1222, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["loda", "mohamed"];
const firstName = "Loda";
const khalid = [firstName, "Reda", 2024 - 1998, friends];
console.log(khalid);
console.log(khalid.length);

//Exercise;
function calcAge(birthYear) {
  return 2024 - birthYear;
}

const years2 = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1);
const ages = [age1, age2, age3];
console.log(ages);
const ages2 = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages2);

```

