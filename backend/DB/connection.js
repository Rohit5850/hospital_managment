const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/hospital';

mongoose.connect(mongoURI ).then(() => {
    console.log('Connected to mongodb in server')
  }).catch((err) => {
    console.error('Failed to connect to Mongodb' , err)
  })
  
  module.exports =  mongoose;





 