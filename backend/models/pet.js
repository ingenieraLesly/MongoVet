import mongoose from "mongoose";

const petSchema=new mongoose.Schema(
    {
        name: String,
        race: String,
        weight: Number,
        height: Number,
        health: String,
        age: Number,
        dbStatus: Boolean,
    }
);

const pet = mongoose.model("pets", petSchema);
export default pet;