import mongoose from "mongoose";

const appointmentSchema= new mongoose.Schema({
    appointmentDate:{
        type:String,
        required:true,
    },

    timeSlot:{
        type:String,
        required:true,
    },

    bookingDate:{
        type:String,
        required:true,
    },

    doctorNumber:{
        type:Number,
        required:true,
    },

    patientNumber:{
        type:Number,
        required:true,
    },

});
mongoose.model("appointments", appointmentSchema);