# Lecture 7 Implementing the Game Logic

 

```js 

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = ' NO number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high!📈';
    } else {
      document.querySelector('.message').textContent = 'YOu lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.message').textContent = 'Too low!📈';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'YOu lost the game';
      document.querySelector('.score').textContent = 0;
    }
    // document.querySelector('.message').textContent = 'Too low!📉';
    // score--;
    // document.querySelector('.score').textContent = score;
  }
});


```

