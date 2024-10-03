# lecture 11 Refactoring our code 

```js

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // when there  is no input
    displayMessage(' NO number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number')
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess  is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
       displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📈');
    } else {
      displayMessage('YOu lost the game');
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

```

Lecture 11 in Jonas Schmedtmann's JavaScript course focuses on **refactoring code** and introduces the **DRY Principle** (Don't Repeat Yourself). Let's break it down step by step.

### What is the DRY Principle?

The **DRY Principle** is a coding best practice that stands for **Don't Repeat Yourself**. The idea is to **avoid duplication** of code by **reusing functions or logic** whenever possible. By doing so:

- The code becomes more **maintainable**.
- It’s easier to **fix bugs** because the logic is centralized in one place.
- It reduces **repetitive tasks** and enhances code readability.

### Refactoring Your Code

**Refactoring** means improving the structure of your code without changing its behavior. In this context, you look at repetitive sections of code and try to simplify them using functions or other means.

#### Before Refactoring (Example)

Imagine you have this repetitive code for updating messages in your game:

```
if (!guess) {
  document.querySelector('.message').textContent = 'No number!';
} else if (guess === secretNumber) {
  document.querySelector('.message').textContent = 'Correct number!';
} else if (guess > secretNumber) {
  document.querySelector('.message').textContent = 'Too high!';
} else if (guess < secretNumber) {
  document.querySelector('.message').textContent = 'Too low!';
}
```

You are repeating `document.querySelector('.message').textContent = ...` several times, which violates the DRY principle.

### Refactoring Using Functions

We can create a **function** to centralize the message update logic. This reduces repetition and makes the code easier to maintain.

#### After Refactoring (Example)

```
jsCopy code// Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

if (!guess) {
  displayMessage('No number!');
} else if (guess === secretNumber) {
  displayMessage('Correct number!');
} else if (guess > secretNumber) {
  displayMessage('Too high!');
} else if (guess < secretNumber) {
  displayMessage('Too low!');
}
```

Now, you’ve refactored the code to use the `displayMessage` function, which simplifies the structure and ensures that if you ever need to change how messages are displayed, you only need to update the function in one place.

### Benefits of Using the DRY Principle

1. **Less Code Duplication**: By refactoring, you reduce code duplication and make it easier to read and understand.
2. **Easier to Maintain**: When you want to update or change a behavior (like how a message is shown), you only need to modify it in one place.
3. **More Readable**: The code becomes more logical, as each part handles one specific task.

### Other Examples in Refactoring

1. **Score Handling**: If you are updating the score in multiple places (e.g., decreasing it in two conditions), you could create a function to handle the score update.
2. **Background Color Change**: Instead of writing the same line of code to change the background color in multiple places, you can also create a function for that.

```
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Now instead of repeating the style change:
setBackgroundColor('#60b347');
```

### Conclusion

By following the **DRY Principle**, you can make your code cleaner, easier to manage, and less error-prone. The key takeaway from lecture 11 is that **refactoring** your code by extracting repetitive logic into functions improves both readability and maintainability. It also aligns with the broader goals of writing efficient and scalable code.

