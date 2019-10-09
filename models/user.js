const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({ // new Schema
	_id: mongoose.Schema.Types.ObjectId,
	email: {type: String, required: true },
	password: { type: String, required: true}
});

module.exports = mongoose.model('user', userSchema);



//////////////trial
const userSchema = new Schema({
    email: String,
    username: String,
    password: String
    secretToken: String;
    active: Boolean; 
},
{
	timestamp:{
		createdat: 'createdat',
		updatedat: 'updatedat'
	}
 }

);

const user = mongoose.model('user', userSchema);
module.exports = user;

