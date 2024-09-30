# Lecture 10 Basic  Array Operations Methods 

```js
// add element 
const friends = ["khalid", "reda", "ahmed", "abdo"];
// at the end of the array
const friendspushed = friends.push("abdelaziz");
console.log(friendspushed);
console.log(friends);
friends.unshift("hoda");
console.log(friends);
// Remove elemnts
friends.pop(); // last
const popped = friends.pop(); // last
console.log(popped);
console.log(friends);
friends.shift(); // first
console.log(friends);
friends.push(23);

console.log(friends.indexOf("pop"));
console.log(friends.includes("peter"));
console.log(friends.includes("khalid"));
console.log(friends.includes(23));
if (friends.includes("ahmed")) {
  console.log("You  have a friend called Ahmed");
}

```

