# Lecture 14 Object Methods

```js
const khalid = {
  firstName: "khalid",
  lastName: "Reda",
  birthYear: 1998,
  job: "Developer",
  friends: ["Ibrahim", "Ahmed", "Micael"],
  hasDriversLicense: true,
  // calAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },
  hasDriversLicense: true,
  // calAge: function () {
  //   console.log(this);
  //   return 2024 - this.birthYear;
  // },
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    console.log("test");
    this.getSummary = `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    } he has ${this.hasDriversLicense ? "a" : "no"} drivers's license`;

    return this.getSummary;
  },
};
console.log(khalid.getSummary());
console.log(khalid.calcAge());
```



