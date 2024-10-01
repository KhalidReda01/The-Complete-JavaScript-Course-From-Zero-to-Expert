# Lecture 14 Coding Challenge #3

```js
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

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.BMI = this.mass / this.height ** 2);
  },
};
console.log(mark.calcBMI());
console.log(mark.BMI);
console.log(john.calcBMI());
console.log(john.BMI);
const result =
  mark.BMI > john.BMI
    ? `${mark.fullName} has ${mark.BMI} higher BMI than${john.BMI} ${john.fullName}`
    : `${john.fullName} has ${john.BMI} higher BMI than ${mark.BMI} ${mark.fullName}`;
console.log(result);

```



