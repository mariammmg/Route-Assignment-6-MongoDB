import * as logRepository from "./log.repository.js";
import * as bookRepository from "../Book/book.repository.js";
import { ObjectId } from "mongodb";

export async function createLogCollection() {
  const collection = await logRepository.createLogCollection();
  return collection;
}
export async function insertLog(data) {

  const id = new ObjectId(data.book_id);
  const book = await bookRepository.FindBookByid(id);
  if (!book) {
    throw new Error("Book not found");
  }
  const log = await logRepository.insertLog(data);
  return log;
}


