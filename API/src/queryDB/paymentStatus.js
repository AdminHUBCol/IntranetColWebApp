const { connection } = require('../dbconnection');

const paymentStatus = async () => {
	const sql = 'SELECT * FROM paymentStatusHBTNAPI';
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

module.exports = { paymentStatus };


