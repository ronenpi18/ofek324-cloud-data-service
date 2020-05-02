var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('catalog', new Schema({
	id      : String,
	title   : String,
	slug    : String,
	category: String,
	length  : Number,
	updated : String
}));