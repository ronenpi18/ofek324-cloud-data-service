var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
var featuredArticlesObj = {
	title:String,
	content:String
}
module.exports = mongoose.model('KBase', new Schema({
	title: String,
	path: String,
	articlesCount: Number,
	featuredArticles: [ featuredArticlesObj ]
}));

//TODO make more efficient !!!