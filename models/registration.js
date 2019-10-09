const mongoose = require('mongoose');
const profile = require('./profile');


const registration = new mongoose.Schema({
	//import userid from profile
  email: {type:String, trim:true, required: true, unique: true, default: null},
  password:  {type:String, trim:true, default: ''},
  confirmPassword:  {type:String, trim:true, default:''},
  role: {type:String, trim:true, default:''},
  userid : {type: String, trim:true, required : true, unique: true }
});

module.exports = mongoose.model('registration', registration);