var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var url_schema = new Schema({
	term : String,
	when : String
});

module.exports = mongoose.model('urlModel',url_schema);