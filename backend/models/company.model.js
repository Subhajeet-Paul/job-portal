import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
    },
    location:{
        type: String,
        // required: true,
    },
    website:{
        type: String,
    },
    logo:{
        type: String,
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
},{timestamps: true});

export const Company = mongoose.model("Company", companySchema);