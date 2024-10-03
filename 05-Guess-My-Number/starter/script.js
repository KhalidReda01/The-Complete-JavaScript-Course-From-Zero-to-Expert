'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 23;
// document.querySelector('.guess').value = 23;
// document.querySelector('.score').textContent = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`this is secret number ${secretNumber}`);
  // console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No number');
    // guess not equal to secret Number
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'YOu win the Game';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      console.log(score);
      document.querySelector('.score').textContent = score;
      displayMessage(uess > secretNumber ? 'Too high📈' : 'Too low📈');
    } else {
      displayMessage('you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
