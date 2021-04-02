const closeFormBtn = document.querySelector('.close-form');
const form = document.querySelector('.form-background');
const openFormBtn = document.querySelector('.add-book');

closeFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
});

openFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
});

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}