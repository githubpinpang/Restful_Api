const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
{
	id: Number,

	title: String,
	
	content: 
	{
		name: string,
		update: Date,

	}
	data-content: String,
});

module.exports = mongoose.model('schema', schema);