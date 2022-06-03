const { connection } = require('../dbconnection');

const participantsAllData = async () => {
	const sql = 'SELECT * FROM participantsHBTNAPI';
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

module.exports = { participantsAllData };
