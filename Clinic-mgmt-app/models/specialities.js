import mongoose from "mongoose";

const specialitiesSchema = new mongoose.Schema({
    specialities:{
        type:String
    }
});
mongoose.model("Specialities", specialitiesSchema);