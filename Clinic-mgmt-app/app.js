import mongoose from "mongoose";
import express from "express";
import cors from 'cors';
//import bodyParser from 'body-parser';

import "./models/doctors.js";
import "./models/patient.js";
import "./models/patientHistory.js";
import "./models/timeslot.js";
import "./models/specialities.js";
import "./models/appointments.js";
import SimpleNodeLogger from "simple-node-logger";


//const SimpleNodeLogger = require('simple-node-logger'),
 const opts = {
 logFilePath:'mylogfile.log',
 timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
 };
const log = SimpleNodeLogger.createSimpleLogger( opts );

//const connectionStr = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`;
//const connectionStr = `mongodb://localhost:27017/clinicdb`;

const connectionStr = `mongodb://localhost:27017/clinicDB`;

//const connectionStr = `mongodb+srv://atrain:3j6fttxX3@cluster0.ixxay.mongodb.net/clinicdb`;
mongoose.connect(connectionStr)
  .then(() => {
    console.log(`Connected to the mongodb Database`);

  })
  .catch((err) => {
    console.log(err.message);
  });

  //const appointments = mongoose.model("appointments");
  
  const doctors = mongoose.model("Doctor");
  const patient = mongoose.model("Patient");
  const patientHistory = mongoose.model("PatientHistory");
  const timeSlot = mongoose.model("TimeSlot");
  const specialitis = mongoose.model("Specialities");
  const Appointments = mongoose.model("appointments");
  var app = express();

  app.use(express.static('public'));

  import bodyParser from 'body-parser';
  app.use(cors());

  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send("Hello react");
});

app.get('/Appointments', (req, res) => {
  Appointments.find({}, function (err, docs) {
          res.json(docs);
      
  });
});
  //search
  //app.get('/Appointments/search/appointmentDate/:date',(req,res)=>{
    //  const apDates=req.params.date;
      //Appointments.find({"date":"apDate"}, function(err, docs){
        //  res.json(docs);
          //console.log(doc);
      //});
  //});
 
app.get("/appointments/search/appointmentDate/:appointmentDate", (req, res) => {
  const dappointmentDate = req.params.appointmentDate;
  log.info(`Searching by appointment Date ${dappointmentDate}`);
  Appointments.find(
    { appointmentDate: dappointmentDate },
    function (err, docs) {
      log.info(`Searching by appointment Date`);
      log.info(docs);
      res.json(docs);
     

    }
  );
});

app.get("/appointments/timeslot/:timeslot", (req, res) => {
  const dTimeslot = req.params.timeslot;
  Appointments.find({ timeslot: dTimeslot }, function (err, docs) {
    res.json(docs);
    log.info(`Searching by Time Slot`);
  });
});

app.get("/appointments/search/doctorNumber/:doctorNumber", (req, res) => {
  const dDoctorNumber = req.params.doctorNumber;
  Appointments.find({ doctorNumber: dDoctorNumber }, function (err, docs) {
    res.json(docs);
    log.info(`Searching by Doctor number`);
  });
});

app.get("/appointments/search/patientNumber/:patientNumber", (req, res) => {
  const dpatientNumber = req.params.patientNumber;
  Appointments.find({ patientNumber: dpatientNumber }, function (err, docs) {
    res.json(docs);
    log.info(`Searching by Patient Number`);
  });
});

app.get("/appointments/bookingDate/:bookingDate", (req, res) => {
  const dbookingDate = req.params.bookingDate;
  Appointments.find({ bookingDate: dbookingDate }, function (err, docs) {
    res.json(docs);
    log.info(`Searching by Booking Date`);
  });
});

app.get("/appointments/delete/:id", (req, res) => {
  Appointments.findByIdAndDelete(req.params.id)
    .then((ans) => {
      console.log("Appointment deleted");
      res.status(200).send({ msg: "Appointment removed successfully" });
      log.info(`Appointment Deleted`);
    })
    .catch((err) => {
      console.log(err.Message);
    });
});

app.post("/appointments/add", (req, res) => {
  console.log("appointment.log")
  console.log(req)
  Appointments.create(req.body)
    .then((ans) => {
      console.log("New appointment inserted");
      res.status(200).send({ msg: "Appointment added" });
      log.info(`Appointment added`);
    })
    .catch((err) => {
      console.log(err.Message);
    });
});

app.post("/appointments/edit/:id", (req, res) => {
  Appointments.findByIdAndUpdate(req.params.id, req.body)
    .then((ans) => {
      console.log("New appointment Inserted");
      res.status(200).send({ msg: "appointment edited successfully" });
      log.info(`Appointment edited`);
    })
    .catch((err) => {
      console.log(err.Message);
    });
});

export default app;