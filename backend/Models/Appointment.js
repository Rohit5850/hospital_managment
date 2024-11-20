const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({

    patientName : {type : String , require : true},
    doctorName : {type: String , require : true},
    date : {type : Date , require : true}

});

const appointment = mongoose.model('Appointment' , appointmentSchema);

module.exports = appointment;