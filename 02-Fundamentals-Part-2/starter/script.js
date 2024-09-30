// "use strict";
// function logger() {
//   console.log("My name is khalid");
// }
// // calling running invoking function
// logger();
// logger();
// logger();
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with  ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const applesJuice = fruitProcessor(5, 0);
// console.log(applesJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number("23");
// console.log(num);

// const age1 = calcAge1(1998);
// // function declartion
// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }
// console.log(age1);

// const age2 = calcAge2(1998);
// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// console.log(age1, age2);
/**
 Lecture 5 Arrow  function
 * 
 */

// const calcAge3 = (birthYear, firstName) => {
//   const age = 2024 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years}`;
// };
// console.log(calcAge3(1998, "khalid"));

/**
 Lecture 6 Functions Calling Other Functions
 */
// function cutFruits(fruit) {
//   return fruit * 4;
// }
// function fruitProcessor(apples, oranges) {
//   const applesCut = cutFruits(apples);
//   const orangesCut = cutFruits(oranges);
//   console.log(applesCut, orangesCut);
// //   const juice = `Juice with  ${applesCut} pieces of apples and ${orangesCut} pieces of oranges`;
// //   return juice;
// // }
// // console.log(fruitProcessor(3, 2));
// /**
//  * Lecture 7 Reviweing Functions
//  */

// // const calcAge = function (birthYear) {
// //   return 2024 - birthYear;
// // };
// // const calcRetiredAge = (birthYear, firstName) => {
// //   const age = calcAge(birthYear);
// //   const retirement = 65 - age;
// //   if (retirement > 0) {
// //     console.log(`${firstName} retires in ${retirement} years}`);
// //     return retirement;
// //   } else {
// //     return -1;
// //   }
// //   //   return `${firstName} retires in ${retirement} years}`;
// // };
// // console.log(calcRetiredAge(1998, "khalid"));
// // console.log(calcRetiredAge(1950, "Hazem"));

// /**
//  * Lecture 9 Introduction to Arrays
//  */
// const friend1 = "khalid";
// const friend2 = "Ahmed";
// const friend3 = "Ibrahim";
// const friends = ["khalid", "ahmed", "Ibrahim"];
// console.log(friends);

// // const years=[1998,2000,2012,2023]
// const years = new Array(1998, 2000, 2012, 2023);
// console.log(years);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[friends.length - 1]);
// friends[2] = "reda";
// console.log(friends);
// const firstName = "Youusef";
// const yussef = [firstName, 2024 - 2012, friends];
// console.log(yussef.length);

// // Exercise

// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const years2 = [1998, 2000, 2012, 2023];
// const age1 = calcAge2(years[0]);
// const age2 = calcAge2(years[1]);
// const age3 = calcAge2(years[2]);

// console.log([age1, age2, age3]);
// console.log([
//   calcAge2(years[0]),
//   calcAge2(years[1]),
//   calcAge2(years[years.length - 2]),
// ]);

// add element
// const friends = ["khalid", "Reda", "Ahmed", "abdo"];
// // add element at the end of array
// const friendsPushed = friends.push("abdelaziz");
// console.log(friends);
// console.log(friendsPushed);
// friends.pop();
// console.log(friends);
// // add at the start of the array
// friends.unshift("hoda");
// console.log(friends);
// friends.shift();
// friends.shift();
// friends.shift();
// console.log(friends);
// console.log(friends.indexOf("Ahmed"));
// console.log(friends.includes("Ahmed"));

const khalid = {
  firstName: "khalid",
  lastName: "reda",
  birthYear: 1998,
  job: "Developer",
  hasDrivingLicense: true,
  friends: ["Ibrahim", "Ahmed", "Micael"],
  // calcAge: function () {
  //   return 2024 - this.birthYear;
  // },
  calcAge: function () {
    console.log(this);
    return (this.age = 2024 - this.birthYear);
  },
  getSummary:(){
    this.getSummary=`${this.firstName} is a ${this.calcAge()} years old ${this.job} he has ${this.hasDrivingLicense? 'a': 'no'} driver's license`
  }
};
console.log(khalid.calcAge());
console.log(khalid.calcAge());
console.log(khalid.calcAge());
console.log(khalid.calcAge());
// const nameKey = "Name";
// console.log(khalid["first" + nameKey]);
// // dot notation vs Brakcet notation

// const interestedIn = prompt(
//   "what do you want to know about khalid?chose between firstName lastName age job friends"
// );
// console.log(interestedIn);
// if (interestedIn) {
//   console.log(khalid[interestedIn]);
// } else {
//   console.log(
//     "Wrong request pease choose between firstName lastName,jobs and friends"
//   );
// }
// // challenge
// // Khalid has a 3 frineds and his best frined is called Ahmed
// console.log(
//   `${khalid.firstName} has a ${khalid.friends.length} friends nand his best friend is ${khalid.friends[0]}`
// );
