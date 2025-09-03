import express from "express";
import { loginUser, signUpUser, userProfile } from "./user.controller";
import { authenticateToken } from "../middleware/auth.middlware";

const UserRouter = express.Router();

UserRouter.post("/signup", signUpUser)
UserRouter.post("/login", loginUser)
UserRouter.get("/profile", authenticateToken, userProfile)

export default UserRouter;