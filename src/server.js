import express from "express";


import { db } from "./common/db/connection.js";
import { AuthorRouter } from "./app/Author/author.route.js";
import { BookRouter } from "./app/Book/book.route.js";
import { LogRouter } from "./app/Logs/log.route.js";

import { collectionRouter } from "./app/collection/collection.route.js";

const app = express();
app.use(express.json());
app.use("/collection", collectionRouter);

app.use("/books", BookRouter);
//app.use("/authors", AuthorRouter);
app.use("/logs", LogRouter);


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});