const { connection } = require('../dbconnection');

const participantsInfo = async () => {
	const sql = 'SELECT * FROM participantsInfo';
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

module.exports = { participantsInfo };

