import mongoose from "mongoose";

const timeSlotSchema =new mongoose.Schema({
    timeSlots:{
        type:String,
        required:true
    }
});

mongoose.model("TimeSlot", timeSlotSchema);