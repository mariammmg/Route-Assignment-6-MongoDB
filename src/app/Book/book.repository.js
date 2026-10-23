import e from "express";
import { db } from "../../common/db/connection.js";

export async function createBookCollection() {
  return await db.createCollection("books", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title"],
        properties: {
          title: {
            bsonType: "string",
            minLength: 1,
          },
        },
      },
    },
  });
}
export async function CreateIndex() {
  const index = await db.collection("books").createIndex({ title: 1 });
  return index;
}
export async function FindBookByTitle(title) {
  const book = await db.collection("books").findOne({ title });
  return book;
}
export async function insertBook(data) {
  const book = await db.collection("books").insertOne(data);
  return book;
}
export async function insertManyBooks(data) {
  const books = await db.collection("books").insertMany(data);
  return books;
}
export async function FindBookByid(id) {
  const book = await db.collection("books").findOne({ _id: id });
  return book;
}
export async function updateBook(title) {
  const book = await db.collection("books").updateOne(
    { title: title },
    { $set: { year: 2022 } }
  );
  return book;
}
export async function findAllBooks(num1, num2) {
  const books = await db
    .collection("books")
    .find({
      year: { $gte: num1, $lte: num2 },
    })
    .toArray();
  return books;
}
export async function findAllBooksBygenere(genre) {
  const books = await db
    .collection("books")
    .find({
      genres: { $in: [genre] },
    })
    .toArray();

  return books;
}
export async function skipAndLimit() {
  const books = await db
    .collection("books")
    .find()
    .sort({ year: -1 })
    .skip(2)
    .limit(3)
    .toArray();
  return books;
}
export async function FindBookbyYear() {
  const books = await db
    .collection("books")
    .find({ year: { $type: "int" } })
    .toArray();
  return books;
}
export async function exculdeBooks() {
  const books = await db
    .collection("books")
    .find({
      genres: { $nin: ["Horror", "Science Fiction"] },
    })
    .toArray();
  return books;
}
export async function deleteAllBooks(year) {
  const books = await db.collection("books").deleteMany({
    year: { $lt: year },
  });
  return books;
}
export async function FilterBooksAfterYear() {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $sort: { year: -1 },
      },
    ])
    .toArray();
  return books;
}
export async function FindAllBooksAfterYear() {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $match: {
          year: { $gt: 2000 },
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          author: 1,
          year: 1,
        },
      },
    ])
    .toArray();
  return books;
}
export async function BreakanyGenres() {
  const books = await db
    .collection("books")
    .aggregate([
      {
        $unwind: "$genres",
      },
      {
        $project: {
          _id: 0,
          title: 1,
          genres: 1,
        },
      },
    ])
    .toArray();
  return books;
}
