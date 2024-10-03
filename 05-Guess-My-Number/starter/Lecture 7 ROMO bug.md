# Lecture 7 ROMO bug

It sounds like you're trying to decrement the score, but it's not updating properly. This could be due to various reasons in your code. Could you share the relevant part where you're trying to decrement the score (i.e., where `score--` is being used)? That will help me identify the issue more effectively.

In the meantime, here are a few things to check:

1. **Correct Variable Assignment**: Ensure that `score` is properly initialized and assigned the correct value before decrementing.

   ```
   js
   
   
   Copy code
   let score = 10;  // Example initialization
   ```

2. **Update the UI**: If the score is shown in the DOM, make sure that you are updating the display after the score changes.

   ```
   jsCopy codescore--;
   document.querySelector('.score').textContent = score;
   ```

3. **Scope Issues**: If `score` is defined inside a function, make sure the scope is correct, and that it's being accessed properly in the part where you're decrementing it.



The issue is that every time you click the button, you are resetting the `score` to `20` because it is declared inside the event listener. This causes the score to always start from 20, so decrementing it has no visible effect.

### Solution:

Move the `score` variable **outside** of the event listener function so that it retains its value across multiple clicks.

Here’s the updated version of your code:

```
jsCopy codeconst secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Move score outside the event listener

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`this is secret number ${secretNumber}`);
  
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You win the Game';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      console.log(score);
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too high📈';
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      console.log(`score is not working ${score}`);
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low📈';
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
```

### Explanation:

- `let score = 20;` is now declared outside the event listener, so its value persists between each click.
- This way, when you decrement `score--`, the new value is correctly retained and displayed.