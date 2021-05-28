const closeFormBtn = document.querySelector('.close-form');
const form = document.querySelector('.form-background');
const openFormBtn = document.querySelector('.add-book');
const HTML = document.querySelector('html');

openFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
  HTML.classList.toggle('hide-nav');
});

const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputISBN = document.querySelector('#isbn');
const inputRead = document.querySelector('#read');

function resetForm() {
  inputTitle.value = '';
  inputAuthor.value = '';
  inputPages.value = '';
  inputISBN.value = '';
  inputRead.checked = false;
}

closeFormBtn.addEventListener('click', () => {
  form.classList.toggle('hide');
  HTML.classList.toggle('hide-nav');
  resetForm();
});

let myLibrary = [];

const libraryContainer = document.querySelector('.library-container');

function deleteBook(isbn) {
  myLibrary = myLibrary.filter((book) => book.isbn !== isbn);
}

function changeReadStatus(isbn) {
  const reverse = !myLibrary.find(book => book.isbn === isbn).read;
  myLibrary.find(book => book.isbn === isbn).read = reverse;
}

function displayBooks() {
  let htmlBooks = '';

  myLibrary.forEach((book) => {
    htmlBooks += `<div class="book-container" data-isbn="${book.isbn}">
  <button class="delete-book">DELETE</button>
  <p class="book-details">Title:<span class="book-details-bold"> ${book.title}</span></p>
  <p class="book-details">Author:<span class="book-details-bold"> ${book.author}</span></p>
  <p class="book-details">Pages:<span class="book-details-bold"> ${book.pages}</span></p>
  <p class="book-details">ISBN:<span class="book-details-bold"> ${book.isbn}</span></p>
  <p class="book-details book-details-last">Read:<span class="book-details-bold"> ${book.read}</span></p>`;
    if (book.read) {
      htmlBooks += '<button class="read-book read-book-btn">READ</button>';
    } else {
      htmlBooks += '<button class="not-read-book read-book-btn">NOT READ</button>';
    }
    htmlBooks += '</div>';
  });
  libraryContainer.innerHTML = htmlBooks;
  const deleteBookBtns = document.querySelectorAll('.delete-book');
  deleteBookBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      deleteBook(e.currentTarget.parentElement.dataset.isbn);
      displayBooks();
    });
  });
  const readBookBtns = document.querySelectorAll('.read-book-btn');
  readBookBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      changeReadStatus(e.currentTarget.parentElement.dataset.isbn);
      displayBooks();
    });
  });
}

displayBooks();

const submitForm = document.querySelector('.submit-form');
const alertDanger1 = document.querySelector('.danger-1');
const alertDanger2 = document.querySelector('.danger-2');
const alertDanger3 = document.querySelector('.danger-3');

const Book = (title, author, pages, isbn, read) => ({
  title, author, pages, isbn, read,
});

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputTitle.value === '' || inputAuthor.value === '' || inputPages.value === '' || inputISBN.value === '') {
    submitForm.disabled = true;
    alertDanger1.classList.toggle('danger-hide');
    setTimeout(() => { alertDanger1.classList.toggle('danger-hide'); submitForm.disabled = false; }, 3000);
  } else if (myLibrary.find(book => book.isbn === inputISBN.value)) {
    submitForm.disabled = true;
    alertDanger2.classList.toggle('danger-hide');
    setTimeout(() => { alertDanger2.classList.toggle('danger-hide'); submitForm.disabled = false; }, 3000);
  } else if (inputISBN.value < 0 || inputPages.value < 0) {
    submitForm.disabled = true;
    alertDanger3.classList.toggle('danger-hide');
    setTimeout(() => { alertDanger3.classList.toggle('danger-hide'); submitForm.disabled = false; }, 3000);
  } else {
    const book = Book(inputTitle.value, inputAuthor.value, inputPages.value, inputISBN.value, inputRead.checked); // eslint-disable-line
    addBookToLibrary(book);
    form.classList.toggle('hide');
    HTML.classList.toggle('hide-nav');
    resetForm();
    displayBooks();
  }
});
