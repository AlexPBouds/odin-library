const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`,
    );
  };
}

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
  for (i = 0; i < libraryLength; i++) {
    const currentBook = library[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("card");

    const bookTitle = document.createElement("p");
    bookTitle.innerText = `Title: ${currentBook.title}`;
    bookTitle.classList.add("title");
    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = `Author: ${currentBook.author}`;
    const bookPages = document.createElement("p");
    bookPages.innerText = `Pages: ${currentBook.pages} pages`;
    const bookRead = document.createElement("p");
    bookRead.innerText = `${currentBook.read ? "Read" : "Not read"}`;
    const bookCount = document.createElement("p");
    bookCount.innerText = `${i + 1}`;
    bookCount.classList.add("count");

    bookCard.append(bookTitle);
    bookCard.append(bookAuthor);
    bookCard.append(bookPages);
    bookCard.append(bookRead);
    bookCard.append(bookCount);

    libraryDiv.append(bookCard);
  }
}

addBookToLibrary("There Is No Antimemetics Division", "qntm", 288, false);
addBookToLibrary("Infinite Jest", "David Foster Wallace", 1104, false);
addBookToLibrary("The Nightingale", "Kristin Hannah", 448, false);
addBookToLibrary("Dog Man - A Graphic Novel", "Dav Pilkey", 240, false);

displayAllBooks();
