var connection = require('./connection')

var orm = {
	selectAll: function(tablename, cb) {
		var sqlQuery = `SELECT * FROM ${tablename}`;

		connection.query(sqlQuery, function(err, result) {
			if (err) {
				console.log(err)
				return cb(err)
			}
			cb(result)
		})
	},
	newOne: function(name, tablename, columnname,  cb) {
		console.log(arguments);
		var query = `INSERT INTO ${tablename} (${columnname}) VALUES ('${name}');`

		connection.query(query, function(err, result) {
			if(err) return cb(err)
			return cb(result);
		})
	},
	updateOne: function(id, tablename, column, cb) {

		var query = `UPDATE ${tablename} SET ${column} = 1 WHERE id=${id}`

		connection.query(query, function(err, result) {
			if (err) return cb(err)
			return cb(result)
		})
	},

	resetAll: function(tablename, columnname, cb){
		var query = `UPDATE ${tablename} SET ${columnname} = 0`

		connection.query(query, function(err, result) {
			if(err) return cb(err)
			return cb(result);
		})
	}
}

module.exports = orm;