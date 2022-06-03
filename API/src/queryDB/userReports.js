const { connection } = require('../dbconnection');

const userReports = async () => {
	const sql = 'SELECT * FROM userReportsHBTNAPI';
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

module.exports = { userReports };


