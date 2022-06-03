const { connection } = require('../dbconnection');

const workingStatus = async () => {
	const sql = 'SELECT * FROM workingStatusHBTNAPI';
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

module.exports = { workingStatus };


