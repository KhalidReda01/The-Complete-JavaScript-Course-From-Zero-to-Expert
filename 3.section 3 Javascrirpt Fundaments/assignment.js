// // Lecture Values and Variables
// const country = "Egypt";
// const continent = "Africa";
// let population = 120;
// // let yourCountrySplitted = true;
// // let countrySecond = "Finland";
// let populationSecond = 6;
// let countPopulation = population / 2;
// console.log(countPopulation++);
// console.log(countPopulation);
// console.log();
// // console.log(country);
// // console.log(continent);
// // console.log(population);

// //Lecture Data Types
// const isIsland = false;
// let lang;
// lang = "Arabic";
// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log();
// console.log(population < populationSecond);
// // let description = country + " is in " + continent + " and its " + population + " speak " + lang;
// let description = `${country}  is in ${continent}   and its ${population}  speak ${lang} ;`;

// console.log(description);

// if (population > 33) {
//   console.log(`${country} is above average`);
// } else {
//   console.log(`${country}'s poulation is ${population - 33} below average`);
// }

/** Lecture Type conversion and Coercion */

/** Lecture 17 ASsignment 
 * LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation
 * 
 * 
*/
// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have")
// );

// if (numNeighbours == 1) {
//   console.log("Only one border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("no border");
// }
// console.log(typeof numNeighbours);
// console.log(numNeighbours);
/**
 * LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D)

 */
// const isEnglishLang = true;
// const isPoulationLarge = false;
// const isICountryIsland = false;
// if (isEnglishLang && !isPoulationLarge && !isICountryIsland) {
//   console.log(`you should live in ${country}`);
// } else {
//   console.log(`Sorry ${country} does not meet all criiteria`);
// }
/*
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
*/

// const lang = "Arabic";
// switch (lang) {
//   case "chinese":
//   case "mandarin":
//     console.log("Most number of native speakers");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speaker");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("number 4");
//     break;
//   case "Arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log(`This ${lang} is not a most native speakers`);
//     break;
// }
