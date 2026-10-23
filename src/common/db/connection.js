import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

await client.connect();

console.log("MongoDB Connected");

export const db = client.db("libraryv1");
export const books = db.collection("books");
export const authors = db.collection("authors");
