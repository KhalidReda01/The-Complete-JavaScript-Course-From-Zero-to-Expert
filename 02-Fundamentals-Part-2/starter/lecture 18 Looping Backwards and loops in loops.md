# lecture 18 Looping Backwards and loops in loops



```js
/**
 *lecture 18 Looping Backwards and loops in loops
 */
const khalid = [
  "khalid",
  "reda",
  2024 - 1998,
  "teacher",
  ["Ibrahim", "ahmed", "micael"],
];
// 0,1,...,4
// 4,3,...,0
for (let i = khalid.length - 1; i >= 0; i--) {
  console.log(i, khalid[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-----starting excercise${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetion ${rep}`);
  }
}

```

```js
4 (3) ['Ibrahim', 'ahmed', 'micael']
script.js:471 3 'teacher'
script.js:471 2 26
script.js:471 1 'reda'
script.js:471 0 'khalid'
script.js:475 -----starting excercise1
script.js:477 Lifting weight repetion 1
script.js:477 Lifting weight repetion 2
script.js:477 Lifting weight repetion 3
script.js:477 Lifting weight repetion 4
script.js:477 Lifting weight repetion 5
script.js:475 -----starting excercise2
script.js:477 Lifting weight repetion 1
script.js:477 Lifting weight repetion 2
script.js:477 Lifting weight repetion 3
script.js:477 Lifting weight repetion 4
script.js:477 Lifting weight repetion 5
script.js:475 -----starting excercise3
script.js:477 Lifting weight repetion 1
script.js:477 Lifting weight repetion 2
script.js:477 Lifting weight repetion 3
script.js:477 Lifting weight repetion 4
script.js:477 Lifting weight repetion 5
```

