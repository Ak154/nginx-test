import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        default: null,
        trim: true,
    },
    designation: {
        type: String,
        default: null,
        trim: true,
    }
},{
    timestamps: true
})

const userModel = mongoose.model("users", userSchema);

export default userModel;