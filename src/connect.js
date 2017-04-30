var mongoose = require('mongoose');

function connect(){
	mongoose.connect('MONGODB HOST');

	var db = mongoose.connection;

	db.on('error',console.error.bind(console,'database connection error'));
}

module.exports = connect;