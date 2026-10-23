import * as authorService from "./author.service.js";
export async function createAuthorCollection(req, res, next) {
  try {
    
    const collection = await authorService.createAuthorCollection(req.body);
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}