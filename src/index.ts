
import dotenv from "dotenv";
dotenv.config()

import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL as string)
.then(()=>console.log("connected to db"))
.catch((err)=>console.log("failed to connect db"))

import express from 'express';
import cors from "cors"
import UserRouter from "./user/user.route";
import MovieRouter from "./movies/movies.route";
import WatchListRouter from "./watchList/watchList.route";

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Node!');
});

app.use("/auth", UserRouter);
app.use("/movies", MovieRouter);
app.use("/watchlist", WatchListRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
