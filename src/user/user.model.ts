import { Schema, model } from "mongoose";
import { User } from "../utils/interfaces";
const userSchema = new Schema<User>({
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    mobile: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});




const UserModel = model("User", userSchema);
export default UserModel;