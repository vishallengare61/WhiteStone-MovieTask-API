import axios from "axios";
import { Request, Response } from "express";

const baseUrl = process.env.OMBAPI as string;
const api_key = process.env.API_KEY as string;

export const getSearchedMovie = async(req: Request, res: Response) =>{
    try {
        const { search } = req.query;

        if(!search)
            return res.status(400).json({message: "Serach parameter is required"})


        const requestUrl = `${baseUrl}?apikey=${api_key}&s=${search}`;

        const movies = await axios.get(requestUrl);

        res.json(movies.data);
    } 
    catch (err: any) {
        if(err instanceof Error)
            return res.status(500).json({message: err.message})

        return res.status(500).json({message: "server error"})
    }
}