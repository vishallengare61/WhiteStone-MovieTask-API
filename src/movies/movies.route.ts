import express from "express";
import { getSearchedMovie } from "./movies.controller";
import { authenticateToken } from "../middleware/auth.middlware";

const MovieRouter = express.Router();

MovieRouter.get("/", authenticateToken, getSearchedMovie);

export default MovieRouter;
