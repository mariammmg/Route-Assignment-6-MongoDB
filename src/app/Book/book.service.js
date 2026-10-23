import * as bookRepository from "./book.repository.js";
import * as logRepository from "../Logs/log.repository.js";

export async function createBookCollection() {
  const collection = await bookRepository.createBookCollection();
  return collection;
}
export async function CreateIndex(){
  const index = await bookRepository.CreateIndex();
  return index;
}
export async function CreateBook(data) {
  const book = await bookRepository.FindBookByTitle(data.title);
  if (book) {
    throw new Error("Book already exists");
  }
  const newbook = await bookRepository.insertBook(data);
  return newbook;
}
export async function insertManyBooks(data) {
  if (data.length === 0) {
    throw new Error("Books array is required");
  }
  if(data.length<3){
    throw new Error("you need to add atleast 3 books");
  }
  for (const book of data) {
    const bookTitleExists = await bookRepository.FindBookByTitle(book.title);
    if (bookTitleExists) {
      throw new Error("Book already exists");
    }
  }
  const books = await bookRepository.insertManyBooks(data);
  return books;
}
export async function updateBook(title) {
  const book = await bookRepository.FindBookByTitle(title);
  if (!book) {
    throw new Error("Book not found");
  }
  const updatedBook = await bookRepository.updateBook(title);
  return updatedBook;
}
export async function FindBookByTitle(title) {
  const book = await bookRepository.FindBookByTitle(title);
  if (!book) {
    throw new Error("Book not found");
  }
  return book;
}
export async function findAllBooks(yearFrom, yearTo) {
  const books = await bookRepository.findAllBooks(yearFrom, yearTo);
  if (books.length === 0) {
    throw new Error("No books found");
  }
  return books;
}
export async function findAllBooksBygenere(genre) {
  const books = await bookRepository.findAllBooksBygenere(genre);
  if (books.length === 0) {
    throw new Error("No books found");
  }
  return books;
}
export async function skipAndLimit() {
  const books = await bookRepository.skipAndLimit();
  if (books.length === 0) {
    throw new Error("No Enough Books found");
  }
  return books;
}
export async function FindBookbyYear() {
  const books = await bookRepository.FindBookbyYear();
  if (books.length === 0) {
    throw new Error("No books found");
  }
  return books;
}
export async function exculdeBooks() {
  const books = await bookRepository.exculdeBooks();
  if (books.length === 0) {
    throw new Error("No books found");
  }
  return books;
}
export async function deleteAllBooks(year) {
  const books = await bookRepository.deleteAllBooks(year);
  if (books.deletedCount === 0) {
    throw new Error("No books Found to delete");
  }
  return books;
}
export async function FilterBooksAfterYear() {
  const books = await bookRepository.FilterBooksAfterYear();
  if (books.length === 0) {
    throw new Error("No books Found");
  }
  return books;
}
export async function FindAllBooksAfterYear() {
  const books = await bookRepository.FindAllBooksAfterYear();
  if (books.length === 0) {
    throw new Error("No books Found");
  }
  return books;
}
export async function BreakanyGenres() {
  const books = await bookRepository.BreakanyGenres();
  if (books.length === 0) {
    throw new Error("No books Found");
  }
  return books;
}
export async function findLogsWithBooksData() {
  const logs = await logRepository.findAllLogswithBooksData();
  if (logs.length === 0) {
    throw new Error("No logs Found");
  }
  return logs;
}