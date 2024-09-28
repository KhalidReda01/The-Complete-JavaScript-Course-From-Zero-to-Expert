#  lecture 6 function Calling Other Functions

```js

// here is the function that we call inside the othre function It's like a cutting machine 
function cutFruitPieces(*fruit*) {

 return fruit * 4;

}
// this is the main function 
function fruitProcessor(*apples*, *oranges*) {

 const applePieces = cutFruitPieces(apples);

 const orangePieces = cutFruitPieces(oranges);

 const juice = `Juice with ${applePieces} piece of  apples and ${orangePieces} pieces of orange.`;

 return juice;

}

console.log(fruitProcessor(2, 3));
```





![006 Functions Callin[00_06_02][20240928-151423]](C:\Users\Workstation\Desktop\css-demo\02-Fundamentals-Part-2\starter\006 Functions Callin[00_06_02][20240928-151423].png)

