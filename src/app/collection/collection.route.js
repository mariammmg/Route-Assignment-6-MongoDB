import express from "express";
import * as authorController from "../Author/author.controller.js";
import * as bookController from "../Book/book.controller.js";
import * as logController from "../Logs/log.controller.js";
export const collectionRouter = express.Router();
collectionRouter.post("/authors", authorController.createAuthorCollection);
collectionRouter.post("/books", bookController.createBookCollection);
collectionRouter.post("/logs/capped", logController.createLogCollection);
collectionRouter.post("/books/index", bookController.CreateIndex);