# Lecture 13 Dot vs Bracket Notation

```js
const khalid = {
  firstName: "khalid",
  lastName: "Reda",
  age: 2024 - 1998,
  job: "Developer",
  friends: ["Ibrahim", "Ahmed", "Micael"],
};
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

const challenge = `${khalid.firstName} has  ${khalid.friends.length} friends and his best friend is called  ${khalid.friends[1]}`;
console.log(challenge);

```

