import express from "express";
import * as logController from "./log.controller.js";
export const LogRouter = express.Router();
LogRouter.post("/", logController.insertLog);