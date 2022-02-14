import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  adress: String,
  emailAdress: String,
});

const user = mongoose.model("users", userSchema);
export default user;
