const closeFormBtn = document.querySelector('.close-form');
const form = document.querySelector('.form-background');
const openFormBtn = document.querySelector('.add-book');

closeFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
});

openFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
});