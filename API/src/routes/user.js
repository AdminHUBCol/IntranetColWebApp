const router = require('express').Router();

// Import verify service
const { verifyToken } = require('../modules/verifyAuthorization');

// Delete unused connection --->
const { connection } = require('../dbconnection')

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

module.exports = router;
