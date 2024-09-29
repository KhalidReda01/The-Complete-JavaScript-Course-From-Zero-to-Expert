# Lecture 7 Reviewing Functions



```js
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    return -1;
    console.log(`${firstName} retires in ${retirement} years`);
  }
  // return retirement;
  // return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1998, "khalid"));
console.log(yearsUntilRetirement(1970, "Youssef"));

```

