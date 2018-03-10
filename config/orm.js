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
	insertOne: function(burger_name = '', devoured = false, cb = null) {
		if (!burger_name.length) {
			if (cb) cb({message: 'Please give me a burger name'})
			return
		}

		var query = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burger_name}', ${devoured})`
		connection.query(query, function(err) {
			if (err) {
				console.log(err)
				return cb(err)
			}

			if (cb) return cb(null)
		})
	},
	updateOne: function(id, fields = {}, cb) {
		let setQuery = ''
		if (!Object.keys(fields).length || !id) {
			console.log('missing id and fields', id, fields)
			return cb(false)
		}

		Object.keys(fields).forEach(function(field) {
			if (field === 'burger_name' || field === 'devoured') setQuery += `${field}=${fields[field]}`
		})

		var query = `UPDATE burgers SET ${setQuery} WHERE id=${id}`

		connection.query(query, function(err, result) {
			if (err) return cb(err)
			return cb(result)
		})
	}
}

module.exports = orm;