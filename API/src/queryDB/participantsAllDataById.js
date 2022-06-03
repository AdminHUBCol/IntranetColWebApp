const { connection } = require('../dbconnection');

const participantsAllDataById = async (intranetUserId) => {
	const sql = `SELECT * FROM participantsHBTNAPI WHERE intranetUserId = ${intranetUserId}`;
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

module.exports = { participantsAllDataById };

