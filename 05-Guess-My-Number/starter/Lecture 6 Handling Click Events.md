# Lecture 6 Handling Click Events

```js
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = ' NO number';
  }
});

```

- # EventTarget: addEventListener() method

  **Note:** This feature is available in [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API).

  The **`addEventListener()`** method of the [`EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget) interface sets up a function that will be called whenever the specified event is delivered to the target.

  Common targets are [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), or its children, [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), and [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window), but the target may be any object that supports events (such as [`IDBRequest`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest)).