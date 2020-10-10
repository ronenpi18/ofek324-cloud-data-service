var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('Events', new Schema({
	user: {
		name:String, avatar:String
	},
	message: String,
	time: Date
}));