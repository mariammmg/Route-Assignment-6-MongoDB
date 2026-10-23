import express from "express";
import * as bookController from "./book.controller.js";
export const BookRouter = express.Router();

BookRouter.post("/", bookController.CreateBook);
BookRouter.post("/batch", bookController.insertManyBooks);
BookRouter.patch("/:title", bookController.updateBook);
BookRouter.get("/title", bookController.FindBookByTitle);
BookRouter.get("/year", bookController.findAllBooks);
BookRouter.get("/genre", bookController.findAllBooksBygenere);
BookRouter.get("/skip-limit", bookController.skipAndLimit);
BookRouter.get("/year-integer", bookController.FindBookbyYear);
BookRouter.get("/exclude-genres", bookController.exculdeBooks);
BookRouter.delete("/before-year", bookController.deleteAllBooks);
BookRouter.get("/aggregate1", bookController.FilterBooksAfterYear);
BookRouter.get("/aggregate2", bookController.FindAllBooksAfterYear);
BookRouter.get("/aggregate3", bookController.BreakanyGenres);
BookRouter.get("/aggregate4", bookController.findLogsWithBooksData);
