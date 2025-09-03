import { Schema, model } from "mongoose";
const moviesSchema = new Schema({
    
}, {timestamps: true});

const MoviesModel = model("Movie", moviesSchema)
export default MoviesModel;