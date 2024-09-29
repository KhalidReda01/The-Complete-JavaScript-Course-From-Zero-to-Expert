# Lecture 7 Reviewing Functions

![007 Reviewing Functi[00_14_33][20240929-140250]](C:\Users\Workstation\Desktop\js\02-Fundamentals-Part-2\starter\007 Reviewing Functi[00_14_33][20240929-140250].png)

let's recap what we did here

```js
const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
// first we have the main function with two parms one for birth year and one for firstName 

const yearsUntilRetirement = function (birthYear, firstName) {
    // we need to calculate the age and get the data from the calcAge then have an if to not have
    //mius values we have an if else statment to do the exact same code here actuall it's so easy no need to 
    // explain you said practice practice even this writing is some kind of practice 
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

