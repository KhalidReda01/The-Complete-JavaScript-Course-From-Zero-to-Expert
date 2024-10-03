# lecture 12  Project 2 Modal Window

```js

'use strict';
const modal = document.querySelector('.modal');
const overLay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log('test', btnCloseModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].textContent);
}

```

## lecture 13 Working with Classes 

```js
for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(
    btnsOpenModal[i].addEventListener('click', function () {
      console.log('button clicked');
      modal.classList.remove('hidden');
      overLay.classList.remove('hidden');
      // modal.style.display='block';
    })
  );
}
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

```

```js
const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden');
  overLay.classList.remove('hidden');
  // modal.style.display='block';
};
const closeModal = function () {
  modal.classList.add('hidden');
  overLay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  console.log(btnsOpenModal[i].addEventListener('click', openModal));
}
btnCloseModal.addEventListener('click', closeModal);
overLay.addEventListener('click', closeModal);

```

take away of this lecture

- to recap if you want to use the same function in multiple event listener then you need to specify that function as a separate function then you can pass that function as an argument to multiple add event listener methods
- in practice we use the functionality of adding and removing classess all the time in order to change the appearance of elements on our page and that's because classes allows to basically aggregagte multiple css properties in just one like a container
- so each class function a bit like a container with a lot of properties in it and then here by adding and removing them we can activate and deactivate certain styles all at the same time 

## lecture 14 Handling an Esc kepress Events