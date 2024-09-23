// let js = "amazing";
// if (js === "amazing") alert("javascript if fun!");

// console.log(40 + 8 + 23 - 10);

// let first = "khalid";
// let firstName = "hello";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let myName = "JM";
// console.log();
// let myFirstJob = "coder";
// let myCurrentJob = "teacher";
// console.log(myFirstJob);
// true;
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// console.log(typeof "khalid");

// javascriptIsFun = "Yes";
// console.log(typeof javascriptIsFun);
// let year;

// console.log(year);
// console.log(typeof year);

// year = 1991;

// console.log(year);
// console.log(typeof year);

// let age = 25;
// age = 26;
// console.log(age);
// const birthYear = 1998;
// //  birthYear=2000;
// //  const job;
// lastName = "namra";
// console.log(lastName);

// console.log(ageKhalid, ageSara);
// console.log(ageKhalid * 2, ageSara / 10, 2 ** 3);

// let x = 10 + 5; // 15
// x += 10; // x=x+10 = 25;
// x *= 4; /// x=x*4=100;
// x++; // x=x+1
// x--; //x=x-1
// x--; //x=x-1
// console.log(x);

// // comparison operators
// console.log(ageKhalid > ageSara);
// console.log(ageSara >= 18);
// const isFullAge = ageSara >= 18;
// console.log(isFullAge);

// const now = 2024;
// const ageKhalid = now - 1998;
// const ageSara = now - 2006;
// console.log(now - 1998 > now - 2006);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageKhalid + ageSara) / 2;
// console.log(ageKhalid, ageSara, averageAge);
/**
 * 
 * Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
 */

// let mass;
// let height;
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const age = 15;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("Sarah can start driving License 🚗");
// } else {
//   const yearsLeft = 19 - age;
//   console.log(`Sarah is too young . wait another ${yearsLeft} years:)`);
// }
// let century;
// const birthYear = 2012;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);
// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const CalcMarkBMI = markMass / markHeight ** 2;
// const CalcJohnBMI = johnMass / johnHeight ** 2;
// const markHigherBMI = CalcMarkBMI > CalcJohnBMI;
// console.log(CalcMarkBMI, CalcJohnBMI);
// console.log(markHigherBMI);

// if (CalcMarkBMI > CalcJohnBMI) {
//   console.log(
//     `Mark's BMI ${CalcMarkBMI} is higher than johns BMI ${CalcJohnBMI}`
//   );
// } else {
//   console.log(`Jon's BMI ${CalcJohnBMI} is higher than Johnas${CalcMarkBMI}`);
// }

// const inputYear = "1991";
// console.log(inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number("khalid"));
// console.log(typeof NaN);
// console.log(String(23), 23);

// // type coercion
// console.log("I  am " + 23 + " Years old ");
// console.log("23" - "10" - 3);
// console.log("23" / "2");

// let n = "1" + 1;
// console.log(n);
// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //617
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); //false
// console.log(5 + 6 + "4");
// console.log(5 + 6 + "4" + 9 - 4 - 2); //117

// 5 falsy values:0, '', undefined, null , NAN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Khalid"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 10;
// if (money) {
//   console.log("Don't spend it all ;");
// } else {
//   console.log("You should get a job");
// }

// let height;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = "18";
// if (age === 18) console.log("You just became an adult:D (strict)");
// if (age == 18) console.log("You just became an adutlt :D (losse)");
// const favorite = Number(prompt("What's your favourite number"));

// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//   console.log("Cool 23 is an amazing number");
// } else if (favorite === 7) {
//   console.log("Cool 7 is a cool number!");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favorite !== 23) console.log("why not 23?");

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);
// const shouldDrive = hasDriversLicense && hasGoodVision;
// // if (shouldDrive) {
// //   console.log("Sarah is able to drive! ");
// // } else {
// //   console.log("Someone else should drive");
// // }
// const isTired = false;

// console.log(hasDriversLicense && hasGoodVision && !isTired);
// if (shouldDrive) {
//   console.log("Sarah is able to drive! ");
// } else {
//   console.log("Someone else should drive");
// }
/**
 *Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
 *
 */
// Solution

// // const averageScoreDolphins = (97 + 110 + 101) / 3;
// // const averageScoreKoalas = (109 + 95 + 106) / 3;
// const averageScoreDolphins = 102;
// const averageScoreKoalas = 100;
// console.log(averageScoreDolphins);
// console.log(averageScoreKoalas);
// if (
//   averageScoreDolphins > averageScoreKoalas &&
//   averageScoreDolphins >= 100 &&
//   averageScoreKoalas >= 100
// ) {
//   console.log("Dolphins Wins ");
// } else if (
//   averageScoreDolphins < averageScoreKoalas &&
//   averageScoreDolphins >= 100 &&
//   averageScoreKoalas >= 100
// ) {
//   console.log("Koals wins");
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("This is a draw they both have the same averate score");
// } else {
//   console.log("no data");
// }
// console.log("Challege end");

// const day = "friday";
// switch (day) {
//   case "monday":
//     console.log("Plan course Struture");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan course Structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy weekend");
// } else {
//   console.log("Not a valid day");
// }

const age = 23;
// age > -28
//   ? console.log("I like to drink adult juice")
//   : console.log("I like to drink water");
// const drink =
// age > -28
//   ? console.log("I like to drink adult juice")
//   : console.log("I like to drink water");

let drink2;
if (age >= 18) {
  drink2 = "juice";
} else {
  drink = "water";
}
console.log(drink2);

console.log(`i like  to drink ${age > -28 ? "juice" : "water"}`);
const country = "Egypt";
const countryPopulation = 120;
console.log(
  `${country}'s population is ${
    countryPopulation > 33 ? "above" : "below"
  } average  `
);
