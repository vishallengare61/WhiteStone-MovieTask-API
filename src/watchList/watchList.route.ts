import { authenticateToken } from './../middleware/auth.middlware';
import express from "express";
import { addToWatchList, deleteWatchList, getWatchList } from "./watchList.controller";
const WatchListRouter = express.Router();

WatchListRouter.post("/", authenticateToken, addToWatchList);
WatchListRouter.get("/", authenticateToken, getWatchList);
WatchListRouter.delete("/:id", authenticateToken, deleteWatchList);

export default WatchListRouter;