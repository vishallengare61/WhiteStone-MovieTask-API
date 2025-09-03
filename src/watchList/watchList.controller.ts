import { Request, Response } from "express";
import WatchListModel from "./watchList.model";
import { AuthInterface } from "../utils/interfaces";

export const addToWatchList = async(req: AuthInterface, res: Response) =>{
    try {

        const userId = req.user?.id

        if (!userId)
            return res.status(401).json({ message: "User not authenticated" });
        
        const { imdbID, Title, Year, Poster } = req.body;

        const existingMovie = await WatchListModel.findOne({ userId, movieId: imdbID });

        if (existingMovie)
            return res.status(400).json({ message: "Movie is already in your watchlist" });
        
            const newWatchList = await WatchListModel.create({
            userId,
            movieId: imdbID,  
            title: Title,   
            year: Year,   
            poster: Poster   
        });

        res.json(newWatchList)
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}


export const getWatchList = async(req: Request, res: Response) =>{
    try {
        const watchList = await WatchListModel.find();
        res.json(watchList)
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}


export const deleteWatchList = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id;
        const watchList = await WatchListModel.findByIdAndDelete(id);

        if(!watchList)
            return res.status(404).json({message: "movie not found in watchlist"})

        res.json(watchList)
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}

export const getWatchListById = async(req: Request, res: Response) =>{
    try {
        
    } 
    catch (err) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}
