const mongoose = require('mongoose');
const profile = require('./profile');


const studentStatus = new mongoose.Schema({
	// import userid from profile

  active: {type:string, trim:true, default:''},
  pending: {type:Date, trim:true, default:''},
  accepted: {type:string, trim:true, default:''},
  profiles: [profile]
});

module.exports = mongoose.model('studentStatus', studentStatus);