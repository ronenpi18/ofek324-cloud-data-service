var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('faq', new Schema({
	question: String,
	answer: String
}));