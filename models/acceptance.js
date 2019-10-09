const mongoose = require('mongoose');
const profile = require('./profile');
const registration = require('registration');


const acceptance = new mongoose.Schema({
	//import userid from profile
  email: {type:string, trim:true, default: ''},
  remark:  {type:string, trim:true, default: ''},
  
  
 


});

module.exports = mongoose.model('acceptance', acceptance);