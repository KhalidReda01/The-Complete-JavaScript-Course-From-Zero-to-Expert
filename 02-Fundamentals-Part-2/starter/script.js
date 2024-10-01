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

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// let dolphinsAverage = calcAverage(44, 23, 71);
// let koalasAverage = calcAverage(65, 54, 49);
// // const dolphinsAverage = calcAverage(85, 54, 41);
// // const koalasAverage = calcAverage(23, 34, 27);
// console.log(dolphinsAverage);
// console.log(koalasAverage);
// const checkWinner = (dolphinsAverage, koalasAverage) => {
//   if (dolphinsAverage > koalasAverage && dolphinsAverage > koalasAverage * 2) {
//     console.log(
//       `the winner is Dolphin his score ${dolphinsAverage} vs ${koalasAverage}`
//     );
//   } else if (
//     koalasAverage > dolphinsAverage &&
//     koalasAverage > dolphinsAverage * 2
//   ) {
//     console.log(
//       `the winner is  kolas temam his score ${koalasAverage} vs ${dolphinsAverage}`
//     );
//   } else {
//     console.log("no one wins");
//   }
// };
// checkWinner(dolphinsAverage, koalasAverage);
// // test 2
// dolphinsAverage = calcAverage(85, 54, 41);
// koalasAverage = calcAverage(23, 34, 27);

// checkWinner(dolphinsAverage, koalasAverage);
/**
 * Lecture 9 Introduction to Arrays
 */

// const friend1 = "khalid";
// const friend2 = "steven";
// const friend3 = "peter";
// const friends = ["Michael", "steven", "Peter"];
// console.log(friends);
// const years = new Array(1888, 1000, 1222, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["loda", "mohamed"];
// const firstName = "Loda";
// const khalid = [firstName, "Reda", 2024 - 1998, friends];
// console.log(khalid);
// console.log(khalid.length);

// //Exercise;
// function calcAge(birthYear) {
//   return 2024 - birthYear;
// }

// const years2 = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years2[0]);
// const age2 = calcAge(years2[1]);
// const age3 = calcAge(years2[years2.length - 1]);
// console.log(age1);
// const ages = [age1, age2, age3];
// console.log(ages);
// const ages2 = [
//   calcAge(years2[0]),
//   calcAge(years2[1]),
//   calcAge(years2[years2.length - 1]),
// ];
// console.log(ages2);
// // add element
// const friends = ["khalid", "reda", "ahmed", "abdo"];
// // at the end
// const friendspushed = friends.push("abdelaziz");
// console.log(friendspushed);
// console.log(friends);
// friends.unshift("hoda");
// console.log(friends);
// // Remove elemnts
// friends.pop(); // last
// const popped = friends.pop(); // last
// console.log(popped);
// console.log(friends);
// friends.shift(); // first
// console.log(friends);
// friends.push(23);

// console.log(friends.indexOf("pop"));
// console.log(friends.includes("peter"));
// console.log(friends.includes("khalid"));
// console.log(friends.includes(23));
// if (friends.includes("ahmed")) {
//   console.log("You  have a friend called Ahmed");
// }
/**
 
 Lecture 11 Coding Challenge 2 
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. Done
Your tasks:
1.  Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2.  And now let's use arrays! So create an array 'bills' containing the test data below
3.  Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4.  Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
 */
// const bill = 301;
// let tip;

// console.log(tip);
// function calTip(bill) {
//   // if (bill >= 50 && bill <= 300) {
//   //   return (tip = 0.15 * bill);
//   // } else {
//   //   return (tip = 0.2 * bill);
//   // }
//   return bill >= 50 && bill <= 300 ? (tip = 0.15 * bill) : (tip = 0.2 * bill);
// }

// // const bills = [100, 200, 300, 400];
// const bills = [125, 55, 44, 400];
// const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
// console.log(calTip(bills[2]));
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// const khalidArray = [
//   "khalid",
//   "reda",
//   2024 - 1998,
//   "teacher",
//   ["Ibrahim", "ahmed", "micael"],
// ];
// const khalid = {
//   firstName: "khalid",
//   lastName: "Reda",
//   birthYear: 1998,
//   job: "Developer",
//   friends: ["Ibrahim", "Ahmed", "Micael"],
//   hasDriversLicense: true,
//   // calAge: function (birthYear) {
//   //   return 2024 - birthYear;
//   // },
//   hasDriversLicense: true,
//   // calAge: function () {
//   //   console.log(this);
//   //   return 2024 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     console.log("test");
//     this.getSummary = `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     } he has ${this.hasDriversLicense ? "a" : "no"} drivers's license`;

//     return this.getSummary;
//   },
// };
// console.log(khalid.getSummary());
// console.log(khalid.calcAge());
// console.log(khalid.age);
// console.log(khalid.age);
// console.log(khalid.age);
// console.log(khalid.age);

// challenge
// 'khalid is a 26 years old developer and if he has a driver license'
// console.log(khalid["calAge"]());
// const calAge= function (birthYear) {
//   return 2022 - birthYear;
// }
// console.log(khalid);
// console.log(khalid.lastName);
// console.log(khalid["lastName"]);
// const nameKey = "Name";
// console.log(khalid["first" + nameKey]);
// console.log(khalid["last" + nameKey]);
// // dot notaiton use final property name
// // bracket notation vs .notation
// const interestedIn = prompt(
//   "what do you want to know about Khalid ? chose between firstName,lastName,age,job,friends"
// );
// console.log(khalid[interestedIn]);

// if (khalid[interestedIn]) {
//   console.log(khalid[interestedIn]);
// } else {
//   console.log(
//     "Wrong request choose between firstName,lastName,age,job and friends"
//   );
// }
// khalid.location = "Egypt";
// khalid["twitter"] = "#khalidNamra";
// console.log(khalid);

// Challenge
// Khalid has 3 friend and his best friend is called Ahmed

// const challenge = `${khalid.firstName} has  ${khalid.friends.length} friends and his best friend is called  ${khalid.friends[1]}`;
// console.log(challenge);

/**Lecture 15 Coding Challenge #3
 *
 *Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1.  For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2.  Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
3.  Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 *
 *
 */

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return (this.BMI = this.mass / this.height ** 2);
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return (this.BMI = this.mass / this.height ** 2);
//   },
// };
// console.log(mark.calcBMI());
// console.log(mark.BMI);
// console.log(john.calcBMI());
// console.log(john.BMI);
// const result =
//   mark.BMI > john.BMI
//     ? `${mark.fullName} has ${mark.BMI} higher BMI than${john.BMI} ${john.fullName}`
//     : `${john.fullName} has ${john.BMI} higher BMI than ${mark.BMI} ${mark.fullName}`;
// console.log(result);

/***
 * Lecture Iteration the For loop
 */

// console.log("Lifting weight repetition 1");
// console.log("Lifting weight repetation 2");
// console.log("Lifting weight repetation 3");
// console.log("Lifting weight repetation 4");
// console.log("Lifting weight repetition 5");
// console.log("Lifting weight repetation 6");
// console.log("Lifting weight repetation 7");
// console.log("Lifting weight repetation 8");
// console.log("Lifting weight repetation 9");
// for loop keeps running while conditon is true
// for (let rep = 1; rep <= 10; rep++) {
//   console.log("lifting weight repetitinon " + rep);
// }

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
  // types = [typeof khalidArray[i]];
  // reading from jonas array
  console.log(khalidArray[i], typeof khalidArray[i]);
  // filling types array
  types[i] = typeof khalidArray[i];
}
console.log(types);
