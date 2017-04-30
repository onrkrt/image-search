var mongoose = require('mongoose');

function connect(){
	mongoose.connect('mongodb://onur:onurpwd@ds029615.mlab.com:29615/img-src');

	var db = mongoose.connection;

	db.on('error',console.error.bind(console,'database connection error'));
}

module.exports = connect;