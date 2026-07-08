export class Book {
  #title;
  #author;
  #pages;
  #read;
  #id;

  constructor(title, author, pages, read) {
    this.#title = title;
    this.#author = author;
    this.#pages = pages;
    this.#read = read;
    this.#id = crypto.randomUUID();
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  get author() {
    return this.#author;
  }

  set author(value) {
    this.#author = value;
  }

  get pages() {
    return this.#pages;
  }

  set pages(value) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error("Pages must be a positive integer");
    }
    this.#pages = value;
  }

  get read() {
    return this.#read;
  }

  set read(value) {
    this.#read = Boolean(value);
  }

  get id() {
    return this.#id;
  }

  toggleRead() {
    this.#read = !this.#read;
  }

  info() {
    console.log(
      `${this.#title} by ${this.#author}, ${this.#pages} pages, ${
        this.#read ? "read" : "not read yet"
      }`,
    );
  }
}