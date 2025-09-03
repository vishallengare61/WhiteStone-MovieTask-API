import { Schema, model } from "mongoose";
const ratingSchema = new Schema({

}, {timestamps: true});

const RatingModel = model("Rating", ratingSchema)
export default RatingModel;

