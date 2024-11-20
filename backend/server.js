const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const Patient = require('./Models/Patient.js')
const Doctor  = require('./Models/Doctor.js')
const Appointment = require('./Models/Appointment.js')

const connectDB = require('./DB/connection.js')

app.use(bodyParser.json());




//  Add Patient

app.post('/patient' , async (req , res)=>{

try{
    const pateint = new Patient(req.body);

    await pateint.save();

    res.status(201).json(pateint);

    console.log('Patient created successfully');
} catch(error){

    console.log("Error" , error)
    res.status(400).json({message : 'Error creating patient ' , error : error.message || error})
     
}

});



//  Add Doctors


app.post('/doctor' , async (req , res ) => {

    try{
        const doctor = new Doctor(req.body);

        await doctor.save();

        res.status(201).json(doctor);

        console.log('Doctor created successfully');
    } catch (error) {
        console.log('Error' , error);
        res.status(400).json({message : 'Error creating doctor' , error : error.message || error})
    }


})


//  Add Appointment

app.post('/appointment' , async (req ,res) => {


    try{

        const appoint = new Appointment(req.body);

        await appoint.save()

        res.status(201).json(appoint)

        console.log("Appointment Created successfully")
    }catch(error) {


        console.log('Error' , error);
        res.status(400).json({message : 'Error creating Appointment' ,   error : error.message || error})
    }


})



app.listen(port , () => {

    console.log('Server is running on port 3000')
})


