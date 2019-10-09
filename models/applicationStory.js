const mongoose = require('mongoose');
const fs = require('fs');
const profile = require('profile');


const profile = require('./profile');

const applicationStory = new mongoose.Schema({
	//import user id  & phone number & educationLevel from profile
  fieldOfStudy: {type:string, trim:true, default:''},
  institution: {type:Date, trim:true, default:''},
  tuition: {type:number, trim:true, default: null}
  remark: {type:string, trim:true, default: null},
  resume: {type:string, trim:true, default: null},
  video: {type: string, trim:true, default: null },
  profiles: [profile]


});

module.exports = mongoose.model('applicationStory', applicationStory);