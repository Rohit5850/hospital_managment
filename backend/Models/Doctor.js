const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({

    name:{type : String, require:true},
    specialty : {type : String , require : true}
});

const doctor = mongoose.model('Doctor' , doctorSchema )


module.exports = doctor;