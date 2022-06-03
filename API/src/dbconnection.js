const mysql = require('mysql');

require("dotenv").config();

//Mysql Connection // Test in local
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

const connect = async () => {
	try {
		await connection.connect();
		console.log("MySQL Connection Successful");
	} catch (error) {
		console.log(error);
		console.log("MySQL connection failed")
	}
}

module.exports = { connect, connection };
