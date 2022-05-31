const router = require('express').Router();

// Load env varriables from .env file
require('dotenv').config();

// Import Json Web Token
const jwt = require('jsonwebtoken');
// Import encrypt module
const CryptoJS = require('crypto-js');


// Connection
const mysql = require('mysql');
//Mysql Connection // Test in local
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

//LOGIN ENDPOINT
router.get('/', async (req, res) => {

	const sql = 'SELECT * FROM user';
	await connection.query(sql, (err, data) => {
		if (err) throw error;
		if (data.length > 0) {
			res.json(data);
		} else {
			res.send('Not results');
		}
	});

});

module.exports = router;
