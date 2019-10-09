const mongoose = require('mongoose');
const profile = require('./profile');


const notification = new mongoose.Schema({
	// import userid from profile

  countNot: {type:Number, trim:true, default: 0},
  
  
});

module.exports = mongoose.model('notification', notification);