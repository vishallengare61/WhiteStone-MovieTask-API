import { Request, Response } from "express";
import UserModel from "./user.model";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { AuthInterface } from "../utils/interfaces";



export const signUpUser = async (req: Request, res: Response)=>{
    try {
        
        const { name, email, mobile, password } = req.body;

        const user = await UserModel.findOne({mobile})

        if(user)
            return res.status(401).json({message: "user already registered"})

        const  hashedPass  = await bcrypt.hash(password, 12)

        const payload = {
            name,
            email,
            mobile,
            password: hashedPass 
        }

        const newUser = await UserModel.create(payload);
        res.json(newUser)

    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}


export const loginUser = async(req: Request, res: Response) =>{
    try {
        const { mobile, password } = req.body;

        const user = await UserModel.findOne({mobile})
        if(!user)
            return res.status(404).json({message: "User not found"})

        const isLoggedIn = await bcrypt.compare(password, user.password);
        if(!isLoggedIn)
            return res.status(401).json({message: "Incorrect credentials"})

        const payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: '7d'})

        res.json({
            message: "user logged In success",
            token,
            user: payload
        })
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}


export const userProfile = async(req: AuthInterface, res: Response)=>{
    try {
        const id = req.user?.id
        const user = await UserModel.findById(id).select("-password")

        if(!user)
            return res.status(404).json({ message: "User not found" });
        
        res.json({ user });
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}