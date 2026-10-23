import { db } from "../../common/db/connection.js";
import {authors} from "../../common/db/connection.js";

export async function createAuthorCollection(data) {
    
    const collection = await db.collection("authors").insertOne(data);
    return collection;
}
export async function FindAuthorByName(name) {
    
  const author = await authors.findOne({ name });
  
  return author;
}