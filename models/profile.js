const mongoose = require('mongoose');
const fs = require('fs');
const registration = require('./registration');


const profile = new mongoose.Schema({
  fullName: {type:string, trim:true, default:''},
  dateOfBirth: {type:Date, trim:true, default:''},
  nationality: {type:string, trim:true, default:''},
  city: {type:string, trim:true, default:''},
  educationLevel: {type:string, trim:true, required: true, default:''},
  zip-code: {type:string, trim:true, default:''},
  photo: {},
  phoneNumber: {type:Number, trim:true, required: true, default: 0},
  registrations : [registration]


});

module.exports = mongoose.model('profile', profile);