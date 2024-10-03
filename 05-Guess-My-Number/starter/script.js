'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.guess').value = 23;
// document.querySelector('.score').textContent = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  let score = 20;
  const guess = Number(document.querySelector('.guess').value);
  console.log(`this is secret number ${secretNumber}`);
  // console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'YOu win the Game';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    score--;
    console.log(score);
    document.querySelector('.message').textContent = 'Too high📈';
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    score--;
    console.log(`score is not working ${score}`);
    document.querySelector('.message').textContent = 'Too low📈';
    document.querySelector('.score').textContent = score;
  }
});
