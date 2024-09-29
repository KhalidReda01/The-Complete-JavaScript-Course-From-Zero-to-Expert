// function logger() {
//   console.log("my name is khalid");
// }

// // running the function invoking / calling the function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

/**
 * lecture 4 Function Declarations vs. Expressions
 *
 */

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// // function declaration
// const age1 = calcAge1(1998);
// console.log(age1);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calcAge2(1998);
// console.log(age1, age2);

/**
 * lecture 5 Arrow function
 *
 */
// // function expression
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// // Arrow Function
// const calcAge3 = (birthYear) => 2024 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1998, "khalid"));
// console.log(yearsUntilRetirement(1988, "Youssef"));
/**
 * lecture 6 function Calling Other Functions
 *
 */
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} piece of  apples and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

/**
 * Lecture 7 Reviewing Functions
 */
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };
// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     return -1;
//     console.log(`${firstName} retires in ${retirement} years`);
//   }
//   // return retirement;
//   // return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1998, "khalid"));
// console.log(yearsUntilRetirement(1970, "Youssef"));

/**
 * Lecture 8 Coding Challenge 1
 *
 */

/**
 * / const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
  //   console.log('Koalas win the trophy 🏆');
  // } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
  } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 */

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

let dolphinsAverage = calcAverage(44, 23, 71);
let koalasAverage = calcAverage(65, 54, 49);
// const dolphinsAverage = calcAverage(85, 54, 41);
// const koalasAverage = calcAverage(23, 34, 27);
console.log(dolphinsAverage);
console.log(koalasAverage);
const checkWinner = (dolphinsAverage, koalasAverage) => {
  if (dolphinsAverage > koalasAverage && dolphinsAverage > koalasAverage * 2) {
    console.log(
      `the winner is Dolphin his score ${dolphinsAverage} vs ${koalasAverage}`
    );
  } else if (
    koalasAverage > dolphinsAverage &&
    koalasAverage > dolphinsAverage * 2
  ) {
    console.log(
      `the winner is  kolas temam his score ${koalasAverage} vs ${dolphinsAverage}`
    );
  } else {
    console.log("no one wins");
  }
};
checkWinner(dolphinsAverage, koalasAverage);
// test 2
dolphinsAverage = calcAverage(85, 54, 41);
koalasAverage = calcAverage(23, 34, 27);

checkWinner(dolphinsAverage, koalasAverage);
