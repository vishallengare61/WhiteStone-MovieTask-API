import mongoose, { Schema, model } from "mongoose";
const watchListSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "User"
    },
    movieId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
}, {timestamps: true});

watchListSchema.index({ userId: 1, movieId: 1 }, { unique: true });

const WatchListModel = model("WatchList", watchListSchema)
export default WatchListModel