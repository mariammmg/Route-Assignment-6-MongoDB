import { db } from "../../common/db/connection.js";


export async function createLogCollection() {
  return db.createCollection("logs", {
    capped: true,
    size: 1024 * 1024,
  });
}
export async function insertLog(data) {
  const log = await db.collection("logs").insertOne(data);
  return log;
}
export async function findAllLogswithBooksData() {
  const logs = db
    .collection("logs")
    .aggregate([
      {
        $addFields: {
          book_id: { $toObjectId: "$book_id" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "book_id",
          foreignField: "_id",
          as: "book_details",
        },
      },
      {
        $project: {
          _id: 0,
          book_id: 0,
          book_details: {
            _id: 0,
            genres: 0
          },

        },
      },
    ])
    .toArray();
  return logs;
}
//todo log relation ID Object in monogosh