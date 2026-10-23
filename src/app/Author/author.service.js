import * as authorRepository from "./author.repository.js";

export async function createAuthorCollection(data) {
  if (data.name===undefined ||data.name === null){
    throw new Error("Author name is required");
  }
  const author = await authorRepository.FindAuthorByName(data.name);
  if (author){
    throw new Error("Author already exists");
  }
  const collection = await authorRepository.createAuthorCollection(data);
  return collection;
}