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

const myLibrary = [{
  title: 'harry potter', author: 'meeeee', pages: '432', read: 'true',
}, {
  title: 'harry potter', author: 'meeeee', pages: '432', read: 'true',
}];

const libraryContainer = document.querySelector('.library-container');

let htmlBooks = '';

myLibrary.forEach((book) => {
  htmlBooks += `<div class="book-container">
  <button class="delete-book">DELETE</button>
  <p class="book-details">Title:<span class="book-details-bold"> ${book.title}</span></p>
  <p class="book-details">Author:<span class="book-details-bold"> ${book.author}</span></p>
  <p class="book-details">Pages:<span class="book-details-bold"> ${book.title}</span></p>
  <p class="book-details">Read:<span class="book-details-bold"> ${book.read}</span></p>
  <button class="read-book">READ</button>
</div>`;
  libraryContainer.innerHTML = htmlBooks;
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}