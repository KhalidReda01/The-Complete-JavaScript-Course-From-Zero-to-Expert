****

# lecture 4 Function Declarations vs. Expressions

```js

/**
 * lecture 4 Function Declarations vs. Expressions
 **/

function calcAge1(birthYear) {
  return 2024 - birthYear;
}
// function declaration
const age1 = calcAge1(1998);
console.log(age1);

// function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1998);
console.log(age1, age2);

```



> Here it look like the same but we have two type of Function for exmple the first one you can declare or run the function first without having an error of init but the function expression don't

**Function declarations are hoisted, meaning they can be called before they are declared. Function expressions, on the other hand, are not hoisted, so they cannot be invoked before they are defined. Additionally, function expressions can be anonymous or named, while function declarations must always be named.**