# lecture 5 Arrow function



```js

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

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1998, "khalid"));
console.log(yearsUntilRetirement(1988, "Youssef"));

```

- An arrow function expression is **a compact alternative to a traditional function expression**, with some semantic differences and deliberate limitations in usage: Arrow functions don't have their own bindings to this , arguments , or super , and should not be used as methods.
- 

What is the difference between normal function and arrow function?

**Regular functions offer traditional syntax and this context handling, while arrow functions provide a concise syntax and lexical this binding**, making them ideal for callbacks and simpler expressions