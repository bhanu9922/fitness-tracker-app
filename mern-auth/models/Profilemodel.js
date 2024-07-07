// models/User.js
const mongoose = require('mongoose');

const profilemodelSchema = new mongoose.Schema({
  Name: { type: String},
  Age: { type: Number },
  Gender:{type:String},
  height: {type:Number},
  weight: {type:Number},
  Mail_id:{type:String},
  Phone_number:{type:Number},
  Adress:{type:String},
});

// Hash the password before saving



module.exports = mongoose.model('Profilemodel', profilemodelSchema);
