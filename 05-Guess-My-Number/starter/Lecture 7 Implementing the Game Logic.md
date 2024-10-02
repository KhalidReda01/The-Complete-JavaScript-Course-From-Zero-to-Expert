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
   }
 });
 
 ```



Overview of Lecture 7: Implementing the Game Logic

- 1. ### Overview of Lecture 7: Implementing the Game Logic

     1. **Setting Up the Game**:

        - Initialize the game with a random secret number and set the initial score and high score.
        - Use the `Math.random()` function to generate a random number between 1 and 20.

        ```js
        const secretNumber = Math.trunc(Math.random() * 20) + 1;
        let score = 20; // Player's initial score
        let highScore = 0; // High score
        ```

     2. **Event Listeners**:

        - Set up an event listener for the "Check" button, which triggers the game logic when clicked.
        - Retrieve the user's guess from the input field and convert it to a number.

        ```js
         document.querySelector('.check').addEventListener('click', function () {
            const guess = Number(document.querySelector('.guess').value);
            // Further logic follows...
        });
        ```

     3. **Game Logic**:

        - **No Guess Input**: Provide feedback if the user submits an empty guess.

        - **Correct Guess**: If the guess is correct, display a success message and update the high score if the current score is higher than the previous high score.

        - Too High or Too Low

          :

          - If the guess is too high, decrement the score and inform the user.
          - If the guess is too low, do the same but with the respective message.

        Example of the game logic:

        ```js
        if (!guess) {
            // No input provided
            document.querySelector('.message').textContent = 'No number!';
        } else if (guess === secretNumber) {
            // Correct guess
            document.querySelector('.message').textContent = 'Correct Number!';
            // Additional logic to handle high score
        } else if (guess > secretNumber) {
            // Too high
            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = 'Too high!';
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        } else if (guess < secretNumber) {
            // Too low
            if (score > 1) {
                score--;
                document.querySelector('.message').textContent = 'Too low!';
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
        }
        ```

     4. **Updating the User Interface**:

        - Use the DOM methods to update the message, score, and any other relevant information on the screen based on the user's guesses.

     5. **Playing Again**:

        - Implement logic to reset the game after a win or loss, allowing the user to play again. This typically involves resetting the score and generating a new secret number.

        Example:

        ```js
        document.querySelector('.again').addEventListener('click', function () {
            score = 20; // Reset score
            secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate new secret number
            // Reset messages and UI elements
        });
        ```

     ### Summary

     This lecture helps you understand how to implement interactive game logic using JavaScript. You learn how to respond to user inputs, manage game states, and manipulate the DOM to provide feedback to the user, all of which are essential skills for creating dynamic web applications.