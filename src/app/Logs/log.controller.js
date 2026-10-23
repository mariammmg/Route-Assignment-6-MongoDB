import * as logService from "./log.service.js";
export async function createLogCollection(req, res, next) {
  try {
    const collection = await logService.createLogCollection();
    res.status(200).json({ message: "Log Collection Created Successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
}
export async function insertLog(req, res, next) {
  try {
    const log = await logService.insertLog(req.body);
    res.status(200).json(log);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
