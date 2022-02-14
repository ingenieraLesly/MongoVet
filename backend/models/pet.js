import mongoose from "mongoose";

const petSchema=new mongoose.Schema(
    {
        name: String,
        race: String,
        weitght: Number,
        height: Number,
        age: Number,
        dbStatus: Boolean,
    }
);

const pet = mongoose.model("pets", petSchema);
export default pet;