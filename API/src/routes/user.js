const router = require('express').Router();

// Import verify service
const { verifyToken } = require('../modules/verifyAuthorization');

// Connection -------
const mysql = require('mysql');
//Mysql Connection // Test in local
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	port: process.env.DB_PORT,
});

//GET USERS
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

// GET participantsHBTNAPI
router.get('/participantsAllData', async (req, res) => {
	const sql = 'SELECT * FROM participantsHBTNAPI';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});

// GET participantsHBTNAPI by User ID
router.get('/participantsAllData/:intranetUserId', async (req, res) => {
	const { intranetUserId } = req.params
	const sql = `SELECT * FROM participantsHBTNAPI WHERE intranetUserId = ${intranetUserId}`;
	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not result');
		}
	});
});

// GET participantsInfo
router.get('/participantsInfo', async (req, res) => {
	const sql = 'SELECT * FROM participantsInfo';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});

// GET paymentStatusHBTNAPI
router.get('/paymentStatusHBTNAPI', async (req, res) => {
	const sql = 'SELECT * FROM paymentStatusHBTNAPI';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});

// GET statusLogHBTNAPI
router.get('/statusLogHBTNAPI', async (req, res) => {
	const sql = 'SELECT * FROM statusLogHBTNAPI';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});


// GET userReportsHBTNAPI
router.get('/userReportsHBTNAPI', async (req, res) => {
	const sql = 'SELECT * FROM userReportsHBTNAPI';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});


// GET workingStatusHBTNAPI
router.get('/workingStatusHBTNAPI', async (req, res) => {
	const sql = 'SELECT * FROM workingStatusHBTNAPI';

	await connection.query(sql, (error, results) => {
		if (error) throw error;
		if (results.length > 0) {
			res.json(results);
		} else {
			res.send('Not results');
		}
	});
});



module.exports = router;
