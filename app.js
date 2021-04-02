const closeFormBtn = document.querySelector('.close-form');
const form = document.querySelector('.form-background');
const openFormBtn = document.querySelector('.add-book');

openFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
});

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputRead = document.querySelector('#read');

function resetForm() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputRead.checked = false;
}

closeFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
  resetForm();
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