const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({

    name:{ type: String, require: true},
    age : {type: Number, require:true},
    gender:{type: String, require:true}

})


const patient = mongoose.model('Patient' , patientSchema);


module.exports = patient;