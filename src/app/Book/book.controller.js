import e from "express";
import * as bookService from "./book.service.js";
export async function createBookCollection(req, res, next) {
  try {
    const collection = await bookService.createBookCollection();
    res.status(200).json({ message: "Book Collection Created Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function CreateIndex(req, res, next) {
  try {
    const index = await bookService.CreateIndex();
    res.status(200).json({ index: index });
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function CreateBook(req, res, next) {
  try {
    const book = await bookService.CreateBook(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function insertManyBooks(req, res, next) {
  try {
    const books = await bookService.insertManyBooks(req.body);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function updateBook(req, res, next) {
  try {
    const title = req.params.title;
    const book = await bookService.updateBook(title);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function FindBookByTitle(req, res, next) {
  try {
    const title = req.query.title;
    const book = await bookService.FindBookByTitle(title);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function findAllBooks(req, res, next) {
  try {
    const yearFrom = Number(req.query.from);
    const yearTo = Number(req.query.to);
    const books = await bookService.findAllBooks(yearFrom, yearTo);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function findAllBooksBygenere(req, res, next) {
  try {
    const genre = req.query.genre;
    const books = await bookService.findAllBooksBygenere(genre);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function skipAndLimit(req, res, next) {
  try {
    const books = await bookService.skipAndLimit();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function FindBookbyYear(req, res, next) {
  try {
    
    const books = await bookService.FindBookbyYear();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function exculdeBooks(req, res, next) {
  try {
    const books = await bookService.exculdeBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function deleteAllBooks(req, res, next) {
  try {
    const year = Number(req.query.year);
    const books = await bookService.deleteAllBooks(year);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function FilterBooksAfterYear(req, res, next) {
  try {
    const books = await bookService.FilterBooksAfterYear();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function FindAllBooksAfterYear(req, res, next) {
  try {
    const books = await bookService.FindAllBooksAfterYear();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function BreakanyGenres(req, res, next) {
  try {
    const books = await bookService.BreakanyGenres();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
export async function findLogsWithBooksData(req, res, next) {
  try {
    const logs = await bookService.findLogsWithBooksData();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}