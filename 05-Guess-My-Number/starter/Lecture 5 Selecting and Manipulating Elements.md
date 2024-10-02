# Lecture 5 Selecting and Manipulating Elements

```js
'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

```

- **value is for form elements to get the value of the form element.** **input.** **textContent is for other elements to get the content of the element**.

- The properties "value" and "textContent" represent different things. Any *node* has a "textContent", including text nodes which are not elements. It represents the text content of the node itself along with any and all descendants.

  But only input elements have a "value". It represent the input data supplied by the user or provided initially by the code. Also, input elements may have a "textContent" property but it will always be empty since they are *void elements*.