import { Book } from "./book.js";

const library = [
  new Book("There Is No Antimemetics Division", "qntm", 288, false),
  new Book("Infinite Jest", "David Foster Wallace", 1104, false),
  new Book("The Nightingale", "Kristin Hannah", 448, false),
  new Book("Dog Man - A Graphic Novel", "Dav Pilkey", 240, false),
];

const popup = document.getElementsByClassName("popup")[0];

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  library.push(newBook);
}

function displayAllBooks() {
  const libraryLength = library.length;
  const libraryDiv = document.getElementsByClassName("libraryContainer")[0];

  // Reset the library and add the Library title
  libraryDiv.innerHTML = "";

  // Create the book cards, and add them to the library div element
  for (let i = 0; i < libraryLength; i++) {
    const currentBook = library[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");
    bookCard.classList.add(`${currentBook.id}`);

    const bookTitle = document.createElement("p");
    bookTitle.innerText = `Title: ${currentBook.title}`;
    bookTitle.classList.add("title");

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Author: ${currentBook.author}`;

    const bookPages = document.createElement("p");
    bookPages.innerText = `Pages: ${currentBook.pages} pages`;

    const readContainer = document.createElement("div");
    readContainer.classList.add("readContainer");

    const bookRead = document.createElement("p");
    bookRead.innerText = `${currentBook.read ? "Read" : "Not read"}`;
    readContainer.append(bookRead);

    const readButton = document.createElement("button");
    readButton.innerText = "Change Read Status";
    readButton.classList.add("readButton");
    readButton.onclick = () => changeReadStatus(currentBook.id);
    readContainer.append(readButton);

    const countContainer = document.createElement("div");
    countContainer.classList.add("countContainer");

    const spacer = document.createElement("div");
    spacer.classList.add("spacer");
    countContainer.append(spacer);

    const bookCount = document.createElement("p");
    bookCount.innerText = `${i + 1}`;
    bookCount.classList.add("count");
    countContainer.append(bookCount);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Book";
    removeButton.classList.add("removeButton");
    removeButton.onclick = () => removeBook(currentBook.id);
    countContainer.append(removeButton);

    bookCard.append(bookTitle);
    bookCard.append(bookAuthor);
    bookCard.append(bookPages);
    bookCard.append(readContainer);
    bookCard.append(countContainer);

    libraryDiv.append(bookCard);
  }
}

function changeReadStatus(id) {
  const specificBook = library.find((book) => book.id == id);
  specificBook.toggleRead();

  displayAllBooks();
}

function removeBook(id) {
  const specificBook = library.findIndex((book) => book.id == id);

  if (specificBook > -1) {
    library.splice(specificBook, 1);
  }

  displayAllBooks();
}

function openPopup() {
  popup.classList.add("openPopup");
}

function closePopup() {
  popup.classList.remove("openPopup");
}

function submitBookData() {
  const popupTitle = document.getElementById("popupTitle");

  const bookTitle = document.querySelector("#bookTitle").value;
  const bookAuthor = document.querySelector("#bookAuthor").value;
  const bookPages = document.querySelector("#bookPages").value;
  const bookRead = document.querySelector("#read").checked;

  if (bookTitle == "") {
    popupTitle.textContent = "Please add a book title!";
    return;
  }

  if (bookAuthor == "") {
    popupTitle.textContent = "Please add an author!";
    return;
  }

  if (bookPages == "") {
    popupTitle.textContent = "Please add a page count!";
    return;
  }

  if (isNaN(bookPages) || !Number.isInteger(Number(bookPages))) {
    popupTitle.textContent = "Page count must be a valid integer!";
    return;
  }

  addBookToLibrary(bookTitle, bookAuthor, Number(bookPages), bookRead);
  displayAllBooks();

  closePopup();
}

displayAllBooks();

// Expose functions used as inline HTML event handlers (e.g. onclick="openPopup()")
window.openPopup = openPopup;
window.closePopup = closePopup;
window.submitBookData = submitBookData;