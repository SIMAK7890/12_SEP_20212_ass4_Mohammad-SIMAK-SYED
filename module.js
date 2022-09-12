import  express from "express";
import mongoose from "mongoose";
const customer = mongoose.Schema({
    Name:String,
    Age: Number,
    Email:String,
    Password:String,
    Dob:String,
    Address:String
});
export default mongoose.model("modelName",customer);