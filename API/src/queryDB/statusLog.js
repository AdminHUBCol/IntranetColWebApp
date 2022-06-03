const { connection } = require('../dbconnection');

const statusLog = async () => {
	const sql = 'SELECT * FROM statusLogHBTNAPI';
	return new Promise((resolve, reject) => {
		connection.query(sql, (error, results) => {
			if (error) {
				reject(error);
				//connection.end();
			}
			resolve(results);
			//connection.end();
		});
	});
}

module.exports = { statusLog };


