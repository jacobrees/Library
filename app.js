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

const libraryContainer = document.querySelector('.library-container');

const submitForm = document.querySelector('.submit-form');
const alertDanger = document.querySelector('.alert-danger');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBooks() {
  let htmlBooks = '';

  myLibrary.forEach((book) => {
    htmlBooks += `<div class="book-container">
  <button class="delete-book">DELETE</button>
  <p class="book-details">Title:<span class="book-details-bold"> ${book.title}</span></p>
  <p class="book-details">Author:<span class="book-details-bold"> ${book.author}</span></p>
  <p class="book-details">Pages:<span class="book-details-bold"> ${book.pages}</span></p>
  <p class="book-details">Read:<span class="book-details-bold"> ${book.read}</span></p>
  <button class="read-book">READ</button>
</div>`;
  });
  libraryContainer.innerHTML = htmlBooks;
}

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputTitle.value === '' || inputAuthor.value === '' || inputPages.value === '') {
    submitForm.disabled = true;
    alertDanger.classList.toggle('hide');
    setTimeout(() => { alertDanger.classList.toggle('hide'); submitForm.disabled = false; }, 3000);
  } else {
    const book = new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputRead.checked);
    addBookToLibrary(book);
    form.classList.toggle('hide');
    displayBooks();
  }
});

displayBooks();
