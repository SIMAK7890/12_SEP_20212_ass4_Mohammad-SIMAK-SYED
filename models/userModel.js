import mongoose from "mongoose";

const userSchema = mongoose.Schema( {
    Name: { type: String, require: true },
    password: { type: String, require: true },
    Email: { type: String, require: true },
    Gender: { type: String, require: true },
    Age: { type: Number, require: true },
    Address: { type: String, require: true }
} );

export default mongoose.model( "Users", userSchema );